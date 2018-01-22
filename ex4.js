const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const PORT = process.argv[2];

const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

app.post('/form', (req, res) => {
    const str = req.body.str;
    res.send(str.split('').reverse().join(''));
});

app.listen(PORT);