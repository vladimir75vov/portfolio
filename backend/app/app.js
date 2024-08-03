const express = require('express');

const host = '127.0.0.1';
const port = 7000;
const defRouter = '/api/v1/';

const app = express();
const productRouter = express.Router();

productRouter.get('/home', (req, res) => {
    res.status(200).type('json');
    res.send(req.query.aaa)
});

productRouter.get('/about', (req, res) => {
    res.status(200).type('text/plain');
    res.send('About page');
});

productRouter.post('/admin', (req, res) => {
    res.status(200).type('text/plain');
    res.send('Create admin request');
});

productRouter.post('/api/user', (req, res) => {
    res.status(200).type('text/plain');
    res.send('Create user request');
});

productRouter.use((req, res) => {
    res.status(404).type('text/plain');
    res.send('Not found');
});

app.use(defRouter, productRouter);
app.use('/resources/images',express.static('resources/images'));
app.use('/resources/files',express.static('resources/files'));

app.listen(port, host, function () {
    console.log(`Server listens http://${host}:${port}`);
});