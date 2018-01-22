const express = require('express');
const path = require('path');
const stylus = require('stylus');
const PORT = process.argv[2];
const staticPath = process.argv[3] || path.join(__dirname, 'public');

const app = express();

app.use(stylus.middleware('public'));
app.use(express.static(staticPath));

app.listen(PORT);