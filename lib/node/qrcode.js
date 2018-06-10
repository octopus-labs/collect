var QRCode = require('qrcode')
var storeManager = require('../helpers/StoreManager')

module.exports = qrcode

/**
 * @param {paycode} the payment code generated
 */
function qrcode (callback) {
  return new Promise((resolve, reject) => {
    
    if(storeManager.get('API_KEY') == null){
      var error = 'You must initialize the api first. Call airpay.initialize(apiKey).'
      //throw new Error(error);
      reject(error)
    }

    QRCode.toDataURL(storeManager.get('API_KEY'), function (err, url) {
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
}
