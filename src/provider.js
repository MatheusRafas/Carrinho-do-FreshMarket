import axios from "axios"; 

export const api = axios.create({
    baseURL: 'https://crudcrud.com/api/886676fcf3f442c4b90ab1b91b54dfbc/',
    timeout: 10000,
});