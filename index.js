const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const app = express();

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json());

app.delete('/users/:id', (req, res) => {
    console.log(req.params);

    res.json({ message: 'Hello World' });
});

app.listen(3333);
