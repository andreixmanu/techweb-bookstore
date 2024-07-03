import mongoose, { Document, Schema } from 'mongoose';

enum UserType {
    ADMIN = 'admin',
    USER = 'user'
}

interface IUser extends Document {
    username: string;
    password: string;
    type: UserType;
}

const userSchema: Schema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    type: { type: String, required: true, enum: Object.values(UserType) }
});