import axios from 'axios';

console.log('Backend URL:', process.env.BACKEND_URL); 

export const api = axios.create({
  baseURL: process.env.BACKEND_URL, // URL do backend
});