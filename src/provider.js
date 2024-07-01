import axios from "axios"; 

export const api = axios.create({
    baseURL: 'https://crudcrud.com/api/cc369105578c41b8ae9e9160367ae3ca/',
    timeout: 10000,
});