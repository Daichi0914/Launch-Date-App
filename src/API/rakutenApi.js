import axios from 'axios';

require('dotenv').config({ debug: true });
const applicationId = process.env.REACT_APP_APPLICATION_ID;

const url = `https://app.rakuten.co.jp/services/api/BooksBook/Search/20170404?format=json&size=9&applicationId=${applicationId}`;

// const comics = () => {
//   const page = 30;
//   const getData = [];
//   for (let i = 1; i < page + 1; i++) {
//     getData.concat(axios.get(`${url}&page=${i}`));
//   }
//   return getData;
// };

export default {
  // comics: comics(),
  comics: axios.get(`${url}`),
  getComicsByTitle: title => axios.get(`${url}&title=${title}`),
  getComicsByAuthors: author => axios.get(`${url}&author=${author}`),
  getComicsByPublishersName: publisher => axios.get(`${url}&publisherName=${publisher}`),
  getComicByIsbn: isbn => axios.get(`${url}&isbn=${isbn}`),
};
