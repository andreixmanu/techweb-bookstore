import express from 'express';
import User from '../models/User';
import { mongo } from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

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
    const { username, password, role, email, created_at } = req.body;
    const saltRounds = 10;

    try {
        // Validate required fields
        if (!username || !password || !role || !email) {
            return res.status(400).json({ message: "All fields are required." });
        }

        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ message: "User already exists." });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
        // Create the new user object
        const newUser = new User({
            username,
            password: hashedPassword, // Use the hashed password here
            role,
            email,
            created_at: created_at || new Date() // Use current date if not provided
        });

        // Save the new user to the database
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
        console.log("New user created");
    } catch (err) {
        console.error("Error creating new user", err);
        res.status(500).json({ message: `Error creating new user:` });
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

export const populateUsers = async (req: express.Request, res: express.Response) => {

    // get the json of users from ../test/user-test.json
    const users = require('../test/user-test.json');

    // send them to the database
    try {
        await User.insertMany(users);
        res.status(200).send("Users populated");
        console.log("Users populated");
    } catch (err) {
        console.error("Error populating users", err);
    }
}

export const loginUser = async (req: express.Request, res: express.Response) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            console.log("User not found");
            return res.status(401).json({ message: 'User not found' });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            console.log("Password mismatch");
            return res.status(401).json({ message: 'Password mismatch' });
        }

        const token = jwt.sign(
            { userId: user._id, email: user.email },
            process.env.JWT_SECRET || "defaultSecretKey",
            { expiresIn: '1h' }
        );

        res.status(200).json({
            message: 'User logged in',
            token,
            user: {
                id: user._id,
                username: user.username,
                email: user.email,
                role: user.role
            }
        });
        console.log("User logged in");
    } catch (error) {
        console.error("Login failed", error);
        res.status(500).json({ message: 'Login failed', error });
    }
}