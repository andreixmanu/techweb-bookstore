import { User } from "./user";

export interface BookObject {
    title: string;
    author: string;
    price_sold: any;
    reserved_price: number;
    current_price: number;
    owner: string; // typeof??
    _id: string;
}
