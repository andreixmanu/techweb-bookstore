import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import Book from './models/Book';
import User from './models/User';
import Auction from './models/Auction';

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
            price_sold : 100,
            current_price : 20,
            owner : "60f4e0c4e2b1d1001f3f7a2e"
        }
    )
    return newBook.save();
}

// test GET request
app.get("/", (req, res) => {
    res.status(200).send("Got a GET request")
})

// test POST request
app.post("/", (req, res) => {
    res.status(200).send("Got a POST request")
})

// test PUT request
app.put("/", (req, res) => {
    res.status(200).send("Got a PUT request")
})

// test DELETE request
app.delete("/", (req, res) => {
    res.status(200).send("Got a DELETE request")
})

// test PATCH request
app.patch("/", (req, res) => {
    res.status(200).send("Got a PATCH request")
})