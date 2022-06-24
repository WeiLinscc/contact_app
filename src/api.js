import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000';

export default {
  fetchItems() {
    return axios.get(`${API_BASE_URL}/items`);
  },

  addItem(item) {
    return axios.post(`${API_BASE_URL}/items`, { item });
  },

  updateItem(item) {
    return axios.patch(`${API_BASE_URL}/items/${item.id}`, { item });
  },

  deleteItem(item) {
    return axios.delete(`${API_BASE_URL}/items/${item.id}`);
  }
};
