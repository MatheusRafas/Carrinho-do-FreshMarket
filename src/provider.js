import axios from "axios"; 

export const api = axios.create({
    baseURL: 'https://crudcrud.com/api/380ad1628fed4ea2a226ede5610dfe38/',
    timeout: 10000,
});