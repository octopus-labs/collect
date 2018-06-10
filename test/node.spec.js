const airpay = require('../lib/node/airpay')
const test = require('tape')

test('Should initialize the airpay variable', function (t){
    t.plan(2)

    t.throws(function(){
        airpay.initialize()
    }, 'Throw error message - Please provide an api key.')

    t.throws(function(){
        airpay.initialize(222222)
    }, 'Throw error message - The provided key is invalid: 222222')
})


test('Should return the qrcode', function (t){
    t.plan(2)
    airpay.Qrcode()
          .then(function (s){
            t.fail('This should not return a successful promise because api has not been initialized.')
          },
          function(e){
            t.ok(e === 'You must initialize the api first. Call airpay.initialize(apiKey).', 'Reject promise with error message - You must initialize the api first. Call airpay.initialize(apiKey).')
          })

    airpay.initialize('1111111')
    airpay.Qrcode()
          .then(function(s){
            t.equal(typeof s, 'string', 'Should return a base 64 uri string of the qr code')
          }, function(e){
            t.fail('This should return a successful promise because api has been initialized.')
          })
})