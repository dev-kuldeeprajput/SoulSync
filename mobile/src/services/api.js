import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.231.139.135:5000/api',
  timeout: 10000,
});
export default api;
