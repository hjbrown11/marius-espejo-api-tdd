const express = require('express');
const router = express.Router();
const createError = require('http-errors');

const todos = [{id: 1, name: 'Do something', completed: false}];

router.get('/', function(req, res, next) {
  res.json(todos);
});

router.get('/:id', function(req, res, next) {
  const foundTodo = todos.find(todo => todo.id === Number(req.params.id));
  if(!foundTodo) {
    return next(createError(404, 'Not Found'));
  }
  res.json(foundTodo);
});

module.exports = router;
