import mongoose, { Document, Schema } from 'mongoose';

interface IUser extends Document {
    username: string;
    password: string;
    role: 'admin' | 'user';
    email: string;
    created_at: Date;
}

const userSchema: Schema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, required: true},
    email: { type: String, required: true },
    created_at: { type: Date, required: true, default: Date.now }
});

export default mongoose.model<IUser>('User', userSchema);