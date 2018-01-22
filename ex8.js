const express = require('express');
const path = require('path');
const fs = require('fs');
const PORT = process.argv[2];
const file = process.argv[3];

const app = express();

app.get('/books', (req, res) => {
    fs.readFile(file, (err, content) => {
        if (err) return res.sendStatus(500);

        try {
            const parseContent = JSON.parse(content);
            res.json(parseContent);
        } catch (err) {
            res.sendStatus(500);
        }
    });
});

app.listen(PORT);