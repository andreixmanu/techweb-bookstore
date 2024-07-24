import express from 'express';
import User from '../models/User';
import { mongo } from 'mongoose';
import bcrypt from 'bcrypt';
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
        res.status(500).send(`Error creating new user ${err}`);
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
        const {email, password} = req.body;
        const user = await User.findOne({email: email, password: password});

        if(!user){
            return res.status(401).json({ message: 'Authentication failed' });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        const token = jwt.sign(
            { userId: user._id, email: user.email },
            process.env.JWT_SECRET || "defaultSecretKey",
            { expiresIn: '1h' }
        );
      
          res.status(200).render("User logged in");
        } catch (error) {
          res.status(500).json({ message: 'Login failed', error });
        }
}