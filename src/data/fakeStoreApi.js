const axios = require('axios');

const getAllProducts = () => axios.get(`https://fakestoreapi.com/products`)

export default {
    getAllProducts
}