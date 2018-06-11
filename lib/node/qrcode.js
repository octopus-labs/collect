var QRCode = require('qrcode')
var storeManager = require('../helpers/StoreManager')
var constants = require('../helpers/Constants')


module.exports = qrcode

/**
 * @param {paycode} the payment code generated
 */
function qrcode (callback) {
  return new Promise(function (resolve, reject){
    var apiKey = storeManager.get('API_KEY')
    if(apiKey == null){
      var error = 'You must initialize the api first. Call airpay.initialize(apiKey).'
      reject(error)
    }
  
    var axiosObject = constants.AXIOS_OBJECT
    axiosObject.defaults.headers.common['Authorization'] = apiKey;

    axiosObject.post('/qr-code')
               .then(function(response){
              
                QRCode.toDataURL(response.data, function (err, url) {
                  if (err != null) {
                    reject(err)
                    if(callback != null){
                      callback(err)
                    }
                  } else {
                    resolve(url)
                    if(callback != null){
                      callback(null, url)
                    }
                  }
                })
                
               })
               .catch(function(e){
                  if (e.response) {
                    if(callback != null){
                      callback(e.response.data)
                    }
                    reject(e.response.data)
                  }
               })
  })
}
