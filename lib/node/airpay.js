var storeManager = require('../helpers/StoreManager')
var constants = require('../helpers/Constants')

var Airpay = {
    initialize: function (apiKey){
        if(typeof apiKey !== 'string'){
            throw new Error('The key provided is invalid:' + apiKey);
            return
        }
        storeManager.set(constants.APIKEY, apiKey)
    }
}

Airpay.Qrcode = require('./qrcode')

module.exports = Airpay