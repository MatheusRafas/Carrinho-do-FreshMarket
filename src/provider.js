import axios from "axios"; 

export const api = axios.create({
    baseURL: 'https://crudcrud.com/api/02dfb4ed00a24603aa961c0f3f9d321a/',
    timeout: 10000,
});