'use strict'

var storeManager = require('../helpers/StoreManager')
var constants = require('../helpers/Constants')

var Airpay = {
    initialize: function (apiKey){
      if(typeof apiKey !== 'string'){
        throw new Error('The key provided is invalid:' + apiKey);
        return
      }

      if ('browser' === 'browser' && storeManager.get('IS_NODE')) {
        console.log('It looks like you\'re using the browser version of the SDK in a ' + 'node.js environment. You should require(\'airpay-collect\') instead.');
      }

      storeManager.set(constants.APIKEY, apiKey)
    }
}

Airpay.Qrcode = require('./qrcode')

module.exports = Airpay
