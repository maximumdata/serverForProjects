var express = require('express'),
    router = express.Router();

var Day8 = require('../models/day8').day8;

router.get('/', function(req, res) {
  Day8.findOne({_id: 1}, function(err, day8) {
    if(err) { console.error(err); res.status(500).send('Broken!'); }
    else {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      res.json(day8);
    }
  });
});

router.post('/update/:size', function(req, res) {
  var day8 = new Day8({
    size: req.params.size,
    date: Date.now()
  });

  var upsertData = day8.toObject();

  delete upsertData._id;

  Day8.update({_id: 1}, upsertData, { upsert: true }, function(err) {
    if(err) { console.error(err); }
    else {
      console.log('worked????');
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      res.status(200).send({success:true});
    }
  });

});

module.exports = router;
