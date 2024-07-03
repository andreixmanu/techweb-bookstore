import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import Book from './models/Book';

const app = express();
const port = 3000;

// MongoDB connection
mongoose.connect('mongodb://mongodb:27017/uni-bookstore')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

app.use(bodyParser.json());

app.listen(port, () => console.log(`Server is running on http://localhost:${port}`));

async function create_template_book() {
    const newBook = await Book.create(
        {
            title : "Fancy title",
            author : "Fancy author",
            isbn : 123456789,
            price : 100
        }
    )
    return newBook.save();
}

create_template_book().then(() => {
    console.log("Template book created");
}).catch((err) => {
    console.error(err.message);
})