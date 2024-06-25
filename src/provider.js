import axios from "axios"; 

export const api = axios.create({
    baseURL: 'https://crudcrud.com/api/29c331e535fd4560be8b6a518af302cf/',
    timeout: 10000,
});