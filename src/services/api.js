import axios from 'axios';

const api = axios.create({
  baseURL: 'http://www.lojanauber.com.br/app/'
});

export default api;