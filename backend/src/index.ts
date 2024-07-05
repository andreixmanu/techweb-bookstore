import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import Book from './models/Book';
import User from './models/User';
import Auction from './models/Auction';

import bookRoutes from './routes/bookRoutes';
import userRoutes from './routes/userRoutes';
import auctionRoutes from './routes/auctionRoutes';

const app = express();
const port = 3000;

// MongoDB connection
mongoose.connect('mongodb://mongodb:27017/uni-bookstore')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

app.use(bodyParser.json());

app.listen(port, () => console.log(`Server is running on http://localhost:${port}`));

// Routes
app.use('/book', bookRoutes);
app.use('/user', userRoutes);
app.use('/auction', auctionRoutes);
