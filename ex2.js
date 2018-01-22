const express = require('express');
const path = require('path');
const PORT = process.argv[2];
const staticPath = process.argv[3] || path.join(__dirname, 'public');

const app = express();

app.use(express.static(staticPath));

app.listen(PORT);