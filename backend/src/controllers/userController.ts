import express from 'express';
import User from '../models/User';
import { mongo } from 'mongoose';

export const testUser = async (req: express.Request, res: express.Response) => {
    res.send("User controller: testUser")
    res.status(200);
}

export const getUser = async (req: express.Request, res: express.Response) => {
    const id = req.params.id;
    try {
        const user = await User.findById(id);
        res.status(200).json(user);
        console.log("User found");
    } catch (err) {
        console.error("Error getting user", err);
    }
}

export const createUser = async (req: express.Request, res: express.Response) => {

    const { username,
            password,
            role,
            email,
            created_at } = req.body;

    try {
        const newUser = new User({
            username,
            password,
            role,
            email,
            created_at
        });

        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
        console.log("New user created");
    } catch (err) {
        console.error("Error creating new user", err);
        res.status(500).send("Error creating new user");
    }
}

export const deleteUser = async (req: express.Request, res: express.Response) => {
    const id = req.params.id;
    try {
        const user = await User.findByIdAndDelete(id);
        res.status(200).json(user);
        console.log("User deleted");
    } catch (err) {
        console.error("Error deleting user", err);
    }
}

export const modifyUser = async (req: express.Request, res: express.Response) => {
    const id = req.params.id;
    const { username,
            password,
            role,
            email,
            created_at } = req.body;
    try{
        const user = await User.findByIdAndUpdate(id, {
            username,
            password,
            role,
            email,
            created_at
        });
        res.status(200).json(user);
        console.log("User updated");
    } catch (err) {
        console.error("Error updating user", err);
    }
}

export const patchUser = async (req: express.Request, res: express.Response): Promise<void> => {
    try {
        const userId = req.params.id;
        const updates = req.body;

        // critical information (created_at) should not be updated
        delete updates.created_at;

        // Find the user and update only the provided fields
        const updatedUser = await User.findByIdAndUpdate(
            userId,
            { $set: updates },
            { new: true, runValidators: true }
        );

        if (!updatedUser) {
            res.status(404).json({ message: 'User not found' });
            return;
        }

        res.status(200).json(updatedUser);
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};