import mongoose, { Document, Schema } from 'mongoose';

enum UserType {
    ADMIN = 'admin',
    USER = 'user'
}

interface IUser extends Document {
    username: string;
    password: string;
    role: UserType;
    email: string;
    created_at: Date;
}

const userSchema: Schema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, required: true, enum: Object.values(UserType) },
    email: { type: String, required: true },
    created_at: { type: Date, required: true, default: Date.now }
});