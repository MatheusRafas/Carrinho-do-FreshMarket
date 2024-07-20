import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://carrinho-do-freshmarket.onrender.com', // URL do backend
});
