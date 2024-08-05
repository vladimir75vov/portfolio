import express from 'express';
import cors from 'cors';
import morgan from "morgan";

const host = '127.0.0.1';
const port = 7000;
const defRouter = '/api/v1/';

const app = express();
const productRouter = express.Router();

productRouter.get('/', (req, res) => {
    const users = [
        {id: 1, name: 'John', email: 'john@example.com'},
        {id: 2, name: 'John2', email: '2@example.com', password: '123456'},
    ];
    return res.status(200).json({users});
})

app.use(cors());
app.use(morgan('dev'))
app.use(defRouter, productRouter);
app.use('/resources/images',express.static('resources/images'));
app.use('/resources/files',express.static('resources/files'));

app.listen(port, host, function () {
    console.log(`Server listens http://${host}:${port}`);

});