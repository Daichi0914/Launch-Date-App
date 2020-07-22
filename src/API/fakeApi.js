import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com';

export default {
  users: axios.get(`${url}/users`),
  getPhotoById: (id) => axios.get(`${url}/photos/${id}`), // returnの形
};
