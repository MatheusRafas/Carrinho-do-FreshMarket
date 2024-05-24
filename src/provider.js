import axios from "axios"; 

export const api = axios.create({
    baseURL: 'https://crudcrud.com/api/61034275dcd64d8481c09117727e6a4a/',
    timeout: 10000,
});