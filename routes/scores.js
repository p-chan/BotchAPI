var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;

/* GET users listing. */
router.get('/v1/scores/:date', function(req, res, next) {
  var target = req.params.date;

  MongoClient.connect("mongodb://localhost/botch", function (err, db) {
    if (err) { console.log('err'); };
    db.collection("scores", function (err, collection) {
      collection.find({date: target}).toArray(function (err, items) {
        console.log(items);
        if (err) {
          res.status(500);
          res.json({
            error: {
              code: 500,
              message: 'Internal Server Error'
            }
          });
        } else if (items == '') {
          res.status(404);
          res.json({
            error: {
              code: 404,
              message: 'Not Found'
            }
          });
        } else {
          res.status(200);
          res.json({
            data: items[0].score
          });
        };
      })
    });
  });
});

module.exports = router;
