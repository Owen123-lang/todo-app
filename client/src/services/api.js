import axios from 'axios';

const API_BASE_URL = "https://todo-app-backend-3z4u.onrender.com/api";

const api = axios.create({
  baseURL: API_BASE_URL, 
});


export const getTodos = async () => {
  try {
    const response = await api.get('/todos');
    return response.data;
  } catch (error) {
    console.error('Error fetching todos:', error);
    throw error;
  }
};

export const createTodo = async (todoData) => {
  try {
    const response = await api.post('/todos', todoData);
    return response.data;
  } catch (error) {
    console.error('Error creating todo:', error);
    throw error;
  }
};

export const deleteTodo = async (id) => {
  try {
    const response = await api.delete(`/todos/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting todo:', error);
    throw error;
  }
};