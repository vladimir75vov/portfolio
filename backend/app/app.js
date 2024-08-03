const express = require('express');

const app = express();

const host = '127.0.0.1';
const port = 7000;

app.use('/resources/images',express.static('resources/images'));
app.use('/resources/files',express.static('resources/files'));

app.get('/home', (req, res) => {
    res.status(200).type('text/plain');
    res.send('Home page')
});

app.get('/about', (req, res) => {
    res.status(200).type('text/plain');
    res.send('About page');
});

app.post('/api/admin', (req, res) => {
    res.status(200).type('text/plain');
    res.send('Create admin request');
});

app.post('/api/user', (req, res) => {
    res.status(200).type('text/plain');
    res.send('Create user request');
});

app.use((req, res) => {
    res.status(404).type('text/plain');
    res.send('Not found');
});

app.listen(port, host, function () {
    console.log(`Server listens http://${host}:${port}`);
});