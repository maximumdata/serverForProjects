var express = require('express'),
    router = express.Router();

var Day15 = require('../models/day15').Day15;

router.get('/api/notes', function(req, res) {
  Day15.find({}, function(err, notes) {
    if(err) { res.status(500).send('Retrieving notes broke'); }
    else {
      res.json(notes);
    }
  });
});

router.post('/api/notes', function(req, res) {
  var newNote = new Day15({
    author: req.body.author,
    comment: req.body.comment,
    date: Date.now()
  });

  newNote.save(function(err) {
    if(err) { res.status(500).send('Saving note failed!'); }
    else {
      res.status(200);
    }
  });

});

module.exports = router;
