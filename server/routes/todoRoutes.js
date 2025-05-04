const express = require('express');
const router = express.Router();
const {
  getTodos,
  createTodo,
  deleteTodo
} = require('../controllers/todoController');

router.route('/').get(getTodos).post(createTodo);
router.route('/:id').delete(deleteTodo);

module.exports = router;