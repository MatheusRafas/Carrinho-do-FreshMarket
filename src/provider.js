import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://carrinho-do-fresh-market-git-backend-matheusrafas-projects.vercel.app/', // URL do backend
});
