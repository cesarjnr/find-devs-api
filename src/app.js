const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const routes = require('./routes');

const app = express();

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

app.use(express.json());
app.use(routes);

app.listen(3333);
