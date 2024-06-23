import axios from "axios"; 

export const api = axios.create({
    baseURL: 'https://crudcrud.com/api/c6d2fb5deeb24b948ecad77ebf66d3ec/',
    timeout: 10000,
});