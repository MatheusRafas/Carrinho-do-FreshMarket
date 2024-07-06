import axios from "axios"; 

export const api = axios.create({
    baseURL: 'https://crudcrud.com/api/5cac552ec50f42f8a7a09c521b15b603/',
    timeout: 10000,
});