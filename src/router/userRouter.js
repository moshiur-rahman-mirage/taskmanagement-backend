const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const Users = require('../models/Users');
const setToken = require('../authentication/setToken');


router.post('/jwt', setToken)

router.post('/', async (req, res) => {
    try {
        const newUser = new Users(req.body);
        const savedInstance = await newUser.save()
        res.json(savedInstance);
    }
    catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
})


router.get('/:email', async (req, res) => {

    // verifyToken
    try {
        const userData = await Users.find({ email: req.params.email })
        res.json(userData);
    } catch (error) {

        res.status(500).json({ error: 'Internal Server Error' });
    }
});


router.post('/', async (req, res) => {
    try {
        const newUser = new Users(req.body);

        const savedInstance = await newUser.save()
        res.json(savedInstance);
    }
    catch (error) {
        // console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})




module.exports = router;