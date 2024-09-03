// backend/auth/middleware.ts
import { expressjwt } from 'express-jwt';

const authenticateJWT = expressjwt({
  secret: 'your-secret-key',
  algorithms: ['HS256'],
});

export default authenticateJWT;