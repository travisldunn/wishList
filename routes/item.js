var express = require('express');
var router = express.Router();
var mongoDB = require ('mongodb').MongoClient;

var connection = {
  url: 'mongodb://localhost:27017/wishList',
  conn: function() {
    mongoDB.connect(this.url, function(err, db) {
      console.log('successful connection')
    })
  }
};

router.post('/insert', function(req, resp, next){
  console.log('inside insert route inside item.js');
  resp.send('pong');
});



module.exports = router;
