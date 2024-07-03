import mongoose, { Document, Schema } from 'mongoose';

interface IBook extends Document {
    title: string;
    author: string;
    isbn: number;
    price: number;
}

const bookSchema: Schema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    isbn: { type: Number, required: true },
    price: { type: Number, required: true }
});

export default mongoose.model<IBook>('Book', bookSchema);

