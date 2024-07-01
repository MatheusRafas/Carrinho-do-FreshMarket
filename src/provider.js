import axios from "axios"; 

export const api = axios.create({
    baseURL: 'https://crudcrud.com/api/53a2ce091e134c1199fa24506c547276/',
    timeout: 10000,
});