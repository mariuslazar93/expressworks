const express = require('express');
const path = require('path');
const PORT = process.argv[2];

const app = express();

app.get('/search', (req, res) => {
    res.send(req.query);
});

app.listen(PORT);