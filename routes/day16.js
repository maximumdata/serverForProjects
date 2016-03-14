var express = require('express');
var router = express.Router();
var request = require('request');


router.get('/:word', function(req, res, next) {
  var word = req.params.word;
  var options = {
    url: 'https://wordsapiv1.p.mashape.com/words/'+word+'/definitions',
    headers: {
      "X-Mashape-Key": "rpx7PtNsCHmshNd6qyaLQeXAhaStp1AfsH7jsnaX82GHEQalsF",
      "Accept": "application/json"
    }
  };
  request(options, function(error, response, body) {
    if(response.statusCode != 404) {
      res.json(body);
    } else {
      res.json({'failed': true});
    }
  });
});

module.exports = router;
