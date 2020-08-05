import axios from 'axios';

require('dotenv').config({ debug: true });
const applicationId = process.env.REACT_APP_APPLICATION_ID;

const url = `https://app.rakuten.co.jp/services/api/BooksBook/Search/20170404?format=json&size=9&page=1&applicationId=${applicationId}`;

export default {
  comics: axios.get(`${url}`),
  getComicsByTitle: e => axios.get(`${url}&title=${e}`),
  getComicsByAuthors: e => axios.get(`${url}&author=${e}`),
  getComicsByPublishersName: e => axios.get(`${url}&publisherName=${e}`),
  getComicByIsbn: isbn => axios.get(`${url}&isbn=${isbn}`),
};
