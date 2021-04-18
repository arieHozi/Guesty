import express, { Application, Request, Response, NextFunction } from 'express';
const todoList = require('./routes/api/todos');
import bodyParser from 'body-parser';
import cors from 'cors';
const app: Application = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req: Request, res: Response) => {
    console.log(req);
});

app.listen(4000, () => {
    console.log('server is connected on port 4000');
});

app.use('/api/todos', todoList);
