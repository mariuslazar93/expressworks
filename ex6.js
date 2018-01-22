const express = require('express');
const path = require('path');
const crypto = require('crypto');
const PORT = process.argv[2];

const app = express();

app.put('/message/:id', (req, res) => {
    const id = req.params.id;
    const currentDate = new Date().toDateString();
    const hash = crypto.createHash('sha1').update(currentDate + id).digest('hex');
    res.send(hash);
});

app.listen(PORT);