import axios from "axios"; 

export const api = axios.create({
    baseURL: 'https://crudcrud.com/api/57d9e81a4f1f47ec9a251e3bd672a20b/',
    timeout: 10000,
});