import axios from 'axios';

require('dotenv').config({ debug: true });
const applicationId = process.env.REACT_APP_APPLICATION_ID;

const url = `https://app.rakuten.co.jp/services/api/BooksBook/Search/20170404?format=json&size=9&applicationId=${applicationId}`;

export default {
  comics: page => axios.get(`${url}&page=${page}`),
  trendComics: page => axios.get(`${url}&sort=sales&page=${page}`),
  releaseComics: page => axios.get(`${url}&sort=%2BreleaseDate&page=${page}`),
  worksComics: page => axios.get(`${url}&page=${page}`),
  getComicsByTitle: title => axios.get(`${url}&title=${title}`),
  getComicsByAuthors: author => axios.get(`${url}&author=${author}`),
  getComicsByPublishersName: publisher => axios.get(`${url}&publisherName=${publisher}`),
  getComicByIsbn: isbn => axios.get(`${url}&isbn=${isbn}`),
};
