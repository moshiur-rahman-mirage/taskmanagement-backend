const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const Tasks = require('../models/Tasks');
const verifyToken = require('../middleware/verifyToken');



router.get('/asd', async (req, res) => {
    try {
        const data = await Tasks.find({});
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


router.get('/', async (req, res) => {

    // verifyToken
    try {
        const tdata = await Tasks.find({})
        res.json(tdata);
    } catch (error) {

        res.status(500).json({ error: 'Internal Server Error' });
    }
});



module.exports = router;