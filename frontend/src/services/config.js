const axios = require("axios");

// const BASE_URL = "https://some-domain.com/api/";
// const BASE_URL = "https://reqres.in";
const BASE_URL = "http://192.168.1.31:3001";

const axiosIns = axios.create({
    baseURL: BASE_URL,
    timeout: 1000,
    //headers: { "X-Custom-Header": "foobar" },
});

export default axiosIns;
