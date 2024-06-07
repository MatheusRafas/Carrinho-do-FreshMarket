import axios from "axios"; 

export const api = axios.create({
    baseURL: 'https://crudcrud.com/api/35d78d2551264396b95a162cb3cd8fa3/',
    timeout: 10000,
});