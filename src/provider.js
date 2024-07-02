import axios from "axios"; 

export const api = axios.create({
    baseURL: 'https://crudcrud.com/api/0d563300c3b040c79e2c95c766a82094/',
    timeout: 10000,
});