var storeManager = require('../helpers/StoreManager')
var constants = require('../helpers/Constants')

var Airpay = {
    initialize: function (apiKey){
        if(!apiKey){
            throw new Error('Please provide an api key.');
            return
        }
        if(typeof apiKey !== 'string'){
            throw new Error('The provided key is invalid: ' + apiKey);
            return
        }
        storeManager.set(constants.APIKEY, apiKey)
    }
}

Airpay.Qrcode = require('./qrcode')

module.exports = Airpay