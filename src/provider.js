import axios from "axios"; 

export const api = axios.create({
    baseURL: 'https://crudcrud.com/api/56c9a692671a4587bba515d2e1f39539/',
    timeout: 10000,
});