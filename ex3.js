const express = require('express');
const path = require('path');
const PORT = process.argv[2];
const staticPath = process.argv[3] || path.join(__dirname, 'public');
const templatesPath = path.join(__dirname, 'templates');

const app = express();

app.use(express.static(staticPath));

app.set('views', templatesPath);
app.set('view engine', 'pug');

app.get('/home', (req, res) => {
    res.render('index', {
        date: new Date().toDateString()
    });
});

app.listen(PORT);