import axios from 'axios';

require('dotenv').config();
const ApiKey = process.env.TEST_VALUE;

const url = `http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=${ApiKey}`;

export default { shop: axios.get(`${url}&shop`) };
