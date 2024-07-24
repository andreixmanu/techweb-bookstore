import mongoose, { Document, ObjectId, Schema } from 'mongoose';
import { GridFSBucket, MongoClient } from 'mongodb';
import User from './User';

interface IBook extends Document {
    title: string;
    author: string;
    price_sold: number;
    reserved_price: number;
    current_price: number;
    owner: typeof User;
    cover_image: ObjectId | null;
}

const bookSchema: Schema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    price_sold: { type: Number, required: false },
    reserved_price: { type: Number, required: true },
    current_price: { type: Number, required: true },
    owner: { type: Schema.Types.ObjectId, ref: 'User' , required: true},
    cover_image: { type: Schema.Types.ObjectId, ref: 'Image', required: false }
});

// Add methods to handle cover image
bookSchema.methods.setCoverImage = async function(imageBuffer: Buffer, filename: string): Promise<void> {
    const bucket = new GridFSBucket(this.db);
    const uploadStream = bucket.openUploadStream(filename);
    
    await new Promise<void>((resolve, reject) => {
        uploadStream.end(imageBuffer, () => {
            if (Error) reject(Error);
            else resolve();
        });
    });

    await this.save();
};

bookSchema.methods.getCoverImage = async function(): Promise<Buffer | null> {
    if (!this.cover_image) return null;

    const bucket = new GridFSBucket(this.db);
    const downloadStream = bucket.openDownloadStream(this.cover_image);
    
    const chunks: Buffer[] = [];
    return new Promise<Buffer>((resolve, reject) => {
        downloadStream.on('data', (chunk) => chunks.push(Buffer.from(chunk)));
        downloadStream.on('error', reject);
        downloadStream.on('end', () => {
            resolve(Buffer.concat(chunks));
        });
    });
};

export default mongoose.model<IBook>('Book', bookSchema);

