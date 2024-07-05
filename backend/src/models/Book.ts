import mongoose, { Document, Schema } from 'mongoose';
import User from './User';

interface IBook extends Document {
    title: string;
    author: string;
    isbn: number;
    price_sold: number;
    current_price: number;
    owner: typeof User;
}

const bookSchema: Schema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    isbn: { type: Number, required: true },
    price_sold: { type: Number, required: false },
    current_price: { type: Number, required: true },
    owner: { type: Schema.Types.ObjectId, ref: 'User' , required: true}
});

export default mongoose.model<IBook>('Book', bookSchema);

