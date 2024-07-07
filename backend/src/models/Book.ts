import mongoose, { Document, Schema } from 'mongoose';
import User from './User';

interface IBook extends Document {
    title: string;
    author: string;
    price_sold: number;
    reserved_price: number;
    current_price: number;
    owner: typeof User;
}

const bookSchema: Schema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    price_sold: { type: Number, required: false },
    reserved_price: { type: Number, required: true },
    current_price: { type: Number, required: true },
    owner: { type: Schema.Types.ObjectId, ref: 'User' , required: true}
});

export default mongoose.model<IBook>('Book', bookSchema);

