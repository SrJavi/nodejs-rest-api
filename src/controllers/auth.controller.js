const jwt = require('jsonwebtoken');

import User from '../models/User';

export async function signup(req, res) {
    try {
        // Receiving Data
        const { username, name, password } = req.body;
        // Creating a new User
        const user = new User({
            username,
            name,
            password
        });
        user.password = await user.encryptPassword(password);
        await user.save();
        // Create a Token
        const token = jwt.sign({ id: user.id }, process.env.SECRET_TOKEN || '', {
            expiresIn: 60 * 60 * 24 // expires in 24 hours
        });

        res.json({ auth: true, token });

    } catch (e) {
        console.log(e)
        res.status(500).send('There was a problem registering your user');
    }
};

export async function signin(req, res) {
    const user = await User.findOne({username: req.body.username})
    if(!user) {
        return res.status(404).send("The email doesn't exists")
    }
    console.log(user);
    const validPassword = await user.comparePassword(req.body.password, user.password);
    if (!validPassword) {
        return res.status(401).send({auth: false, token: null});
    }
    const token = jwt.sign({id: user._id}, process.env.SECRET_TOKEN || '', {
        expiresIn: 60 * 60 * 24
    });
    res.status(200).json({auth: true, token});
};

export async function me(req, res) {
    const user = await User.findById(req.userId, { password: 0});
    if (!user) {
        return res.status(404).send("No user found.");
    }
    res.status(200).json(user);
};