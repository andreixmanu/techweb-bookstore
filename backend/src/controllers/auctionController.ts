import express from 'express';
import Auction from '../models/Auction';

export const testAuction = async (req: express.Request, res: express.Response) => {
    res.send("Auction controller: testAuction")
    res.status(200);
}

export const createAuction = async (req: express.Request, res: express.Response) => {

    const {
        book,
        seller,
        price_sold,
        current_price,  // used as initial price for the auction
        reserved_price, 
        created_at,
        updated_at
    } = req.body;

    try {
        const newAuction = new Auction({
            book,
            seller,
            price_sold,
            current_price,
            reserved_price,
            created_at,
            updated_at
        });

        const savedAuction = await newAuction.save();
        res.status(201).json(savedAuction);
        console.log("New auction created");
    } catch (err) {
        console.error("Error creating new auction", err);
        res.status(500).send("Error creating new auction");
    }
}

export const getAuction = async (req: express.Request, res: express.Response) => {
    const id = req.params.id;
    try {
        const user = await Auction.findById(id);
        res.status(200).json(user);
        console.log("Auction found");
    } catch (err) {
        console.error("Error getting auction", err);
    }
}


export const deleteAuction = async (req: express.Request, res: express.Response) => {
    const id = req.params.id;
    try {
        const user = await Auction.findByIdAndDelete(id);
        res.status(200).json(user);
        console.log("User deleted");
    } catch (err) {
        console.error("Error deleting user", err);
    }
}

export const modifyAuction = async (req: express.Request, res: express.Response) => {
    const id = req.params.id;
    const { username,
            password,
            role,
            email,
            created_at } = req.body;
    try{
        const user = await Auction.findByIdAndUpdate(id, {
            username,
            password,
            role,
            email,
            created_at
        });
        res.status(200).json(user);
        console.log("Auction updated");
    } catch (err) {
        console.error("Error updating Auction", err);
    }
}

export const patchAuction = async (req: express.Request, res: express.Response): Promise<void> => {
    try {
        const userId = req.params.id;
        const updates = req.body;

        // critical information (created_at) should not be updated
        delete updates.created_at;

        // Find the user and update only the provided fields
        const updatedAuction = await Auction.findByIdAndUpdate(
            userId,
            { $set: updates },
            { new: true, runValidators: true }
        );

        if (!updatedAuction) {
            res.status(404).json({ message: 'Auction not found' });
            return;
        }

        res.status(200).json(updatedAuction);
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};