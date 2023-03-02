const express = require('express');
const { modiftodo, deleteTodo, createtodo, readtodo, gettodo } = require('../controllers/todoControllers');
const router = express.Router();
// get a list of todo from the db
router.get('/todos', readtodo);
router.get('/todos/:id', gettodo);
// add new todo to the db
router.post('/todos', createtodo);
// update a todo in the db
router.put('/todos/:id', modiftodo);
// delete a todo from the db
router.delete('/todos/:id', deleteTodo);
module.exports = router;