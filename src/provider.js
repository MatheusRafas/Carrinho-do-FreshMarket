import axios from "axios"; 

export const api = axios.create({
    baseURL: 'https://crudcrud.com/api/8603d40f55534ac898bfd759a44fbf06/',
    timeout: 10000,
});