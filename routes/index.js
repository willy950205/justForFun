var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  console.log("Hello world");

  const returnData = { "hi": "gg" };

  res.json(returnData);

});

router.get('/test', function(req, res, next) {

  console.log("Hello test");

  const returnData = { "Hello": "test" };

  res.json(returnData);
});

module.exports = router;
