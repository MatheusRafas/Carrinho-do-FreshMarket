import axios from "axios"; 

export const api = axios.create({
    baseURL: 'https://crudcrud.com/api/3165c7b3db5045f5a664baecb9ee09ca/',
    timeout: 10000,
});