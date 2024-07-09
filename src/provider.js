import axios from "axios"; 

export const api = axios.create({
    baseURL: 'https://crudcrud.com/api/d404494a44424631945b4d23e1371d4a/',
    timeout: 10000,
});