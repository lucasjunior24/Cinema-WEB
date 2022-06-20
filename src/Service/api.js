import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.50.0.227:3333/',
});

export default api;