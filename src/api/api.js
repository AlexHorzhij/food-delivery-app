import axios from 'axios';

const BASE_URL = 'http://localhost:3001';

const instance = axios.create({
  baseURL: BASE_URL,
});

export default {
  async getAllShops() {
    try {
      const { data } = await instance.get('/');
      return data.data;
    } catch (error) {
      console.log('error: ', error);
    }
  },
  async sendOrder(dataForm) {
    try {
      const { data } = await instance.post('/orders', dataForm);
      console.log('response: ', data);
      return data;
    } catch (error) {
      console.log('error: ', error);
    }
  },
};
