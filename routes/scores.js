var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;

var conf = require('../conf.json');
var MongoURL = 'mongodb://' + conf.db.user + ':' + conf.db.pass + '@ds047802.mongolab.com:47802/heroku_j6hnjlq5';

/* GET users listing. */
router.get('/v0/scores/:date', function(req, res, next) {
  var target = req.params.date;

  MongoClient.connect(MongoURL, function (err, db) {
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
