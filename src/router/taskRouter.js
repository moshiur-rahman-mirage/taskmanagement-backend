const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const Tasks = require('../models/Tasks');

const verifyToken = require('../middleware/verifyToken');



router.get('/', async (req, res) => {
    try {
        let query = {};

        if (req.query?.task_status) {
            query.task_status = req.query.task_status;
        }

        if (req.query?.email) {
            query.email = req.query.email;
        }

        const data = await Tasks.find(query);
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});



router.get('/', async (req, res) => {
    try {
        // Retrieve all data from the "tasks" collection
        const tasks = await Tasks.find({});
        res.json(tasks);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


router.get('/:email', async (req, res) => {

    // verifyToken
    try {
        const taskdata = await Tasks.find({ email: req.params.email })
        res.json(taskdata);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


router.post('/', async (req, res) => {
    try {
        const newTask = new Tasks(req.body);

        const savedInstance = await newTask.save()
        res.json(savedInstance);
    }
    catch (error) {
        // console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})





module.exports = router;