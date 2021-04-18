import express from 'express';
const router = express.Router();


interface data {
    id: string;
    title: string;
    description: string;
    priority: string;
    completed: boolean;
}

const TodoList: data[] = [];

router.get('/', (req, res) => {
    res.send(TodoList);
});

router.post('/', (req, res) => {
    const todo = req.body;
    TodoList.push(todo);
    res.send(TodoList);
});

router.put('/:id', (req, res) => {
    const _id = req.params.id;
    TodoList.map((element) => {
        if (element.id === _id) {
            element.completed = true;
            res.send(TodoList);
        }
    });
});

router.delete('/:id', (req, res) => {
    const _id = req.params.id;
    const index = TodoList.findIndex((element) => element.id === _id);
    const newList = TodoList.splice(index, 1);
    res.send(TodoList);
});

module.exports = router;
