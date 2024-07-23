export interface User {
    username: string;
    password: string;
    role: 'admin' | 'user';
    email: string;
    created_at: Date;
}
