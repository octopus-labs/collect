var QRCode = require('qrcode')
var storeManager = require('../helpers/StoreManager')

module.exports = qrcode

/**
 * @param {paycode} the payment code generated
 */
function qrcode (callback = null) {
  return new Promise((resolve, reject) => {
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
