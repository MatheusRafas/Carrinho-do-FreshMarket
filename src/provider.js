import axios from "axios"; 

export const api = axios.create({
    baseURL: 'https://crudcrud.com/api/30d9101a29564bcea41beccffa90968a/',
    timeout: 10000,
});