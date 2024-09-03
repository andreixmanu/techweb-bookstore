// backend/auth/auth.ts
import jwt from 'jsonwebtoken';

interface User {
    id: number;
    username: string;
}

const generateToken = (user: User): string => {
    const payload = { id: user.id, username: user.username };
    const secret = 'your-secret-key';
    const options = { expiresIn: '1h' };

    return jwt.sign(payload, secret, options);
};

export default generateToken;