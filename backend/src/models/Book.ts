import mongoose, { Document, Schema } from 'mongoose';

interface IBook extends Document {
    title: string;
    author: string;
    isbn: string;
    price: number;
}

const bookSchema: Schema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    isbn: { type: String, required: true },
    price: { type: Number, required: true }
});

export default mongoose.model<IBook>('Book', bookSchema);

