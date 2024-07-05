import mongoose from "mongoose";
import { Document, Schema } from "mongoose";
import User from "./User";
import Book from "./Book";

interface IAuction extends Document {
    book: typeof Book;
    seller: typeof User;
    buyer: typeof User;
    price_sold: number;
    current_price: number;
    created_at: Date;
    updated_at: Date;
}

const auctionSchema: Schema = new Schema({
    book: { type: Schema.Types.ObjectId, ref: 'Book', required: true },
    seller: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    buyer: { type: Schema.Types.ObjectId, ref: 'User', required: false },
    price_sold: { type: Number, required: false },
    current_price: { type: Number, required: true },
    created_at: { type: Date, required: true, default: Date.now },
    updated_at: { type: Date, required: true, default: Date.now }
});

export default mongoose.model<IAuction>('Auction', auctionSchema);