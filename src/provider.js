import axios from "axios"; 

export const api = axios.create({
    baseURL: 'https://crudcrud.com/api/b7d260c15bb444dcb8fde3757b218bf3/',
    timeout: 10000,
});