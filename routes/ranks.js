var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({
    hoge: "fuga"
  });
});

module.exports = router;
