var QRCode = require('qrcode')
var storeManager = require('../helpers/StoreManager')

module.exports = qrcode

/**
 * @param {imageContainerId} the id of the canvas or image we want to display qrcode in
 */
function qrcode (imageContainerId) {
    var canvas = document.getElementById(imageContainerId)

    QRCode.toCanvas(canvas, 'sample text', function (error) {
        if (error) console.error(error)
        console.log('success!');
    })
}
