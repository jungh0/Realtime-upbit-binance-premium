var express = require('express');
var router = express.Router();
// var http = require('https');
// var options = {
//     hostname: 'm.kr.investing.com',
//     path: '/currencies/usd-krw'
// };

// var USDKRW = "0"

// function handleResponse(response) {
//   var serverData = '';
//   response.on('data', function (chunk) {
//     serverData += chunk;
//   });
//   response.on('end', function () {
//     console.log("received server data:");
//     var result = serverData.split('<span class="lastInst pid-650-last">')[1].split('</span>')[0]
//     var tmp = result.trim();
//     console.log(tmp);
//     USDKRW = tmp;
//   });
// }

// function reloadusdkrw(){
//   http.request(options, function(response){
//     handleResponse(response)
//   }).end();
//   return USDKRW
// }

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { usdkrw: 'usdkrw' });
});


module.exports = router;

