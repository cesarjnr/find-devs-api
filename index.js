const express = require('express');

const app = express();

app.use(express.json());

app.delete('/users/:id', (req, res) => {
    console.log(req.params);

    res.json({ message: 'Hello World' });
});

app.listen(3333);
