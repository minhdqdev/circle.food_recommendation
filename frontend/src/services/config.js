const axios = require("axios");

const BASE_URL_BE = "https://foozy.herokuapp.com";
const BASE_URL_ES = "http://3.129.57.131:6969";

export const axiosES = axios.create({
    baseURL: BASE_URL_ES,
    timeout: 10000,
});

export const axiosBE = axios.create({
    baseURL: BASE_URL_BE,
    timeout: 10000,
});
