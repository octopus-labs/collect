var axios = require('axios')
var axiosConfig = {
    baseURL:'https://airpay-staging.herokuapp.com/'
}
module.exports = {
    APIKEY: 'API_KEY',
    AXIOS_OBJECT:axios.create(axiosConfig)
}