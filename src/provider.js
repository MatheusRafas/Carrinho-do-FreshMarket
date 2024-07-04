import axios from "axios"; 

export const api = axios.create({
    baseURL: 'https://crudcrud.com/api/8eb8f82d895c4ad1ad44d367c8cc9986/',
    timeout: 10000,
});