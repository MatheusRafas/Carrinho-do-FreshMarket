import axios from "axios"; 

export const api = axios.create({
    baseURL: 'https://crudcrud.com/api/c9ffd48f72e14d0eb396abe17a83518a/',
    timeout: 10000,
});