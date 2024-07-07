import axios from "axios"; 

export const api = axios.create({
    baseURL: 'https://crudcrud.com/api/5d709e47116540a698e5ec31cf0b4c46/',
    timeout: 10000,
});