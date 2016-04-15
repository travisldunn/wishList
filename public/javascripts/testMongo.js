var mongoDB = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/wishList';
var lock = 0;
var printout = function(r) {
  lock = 0;
}

var conn = function(callback) {
  mongoDB.connect(url, function(err, db) {
    var cursor = db.collection('practiceWishes').find();
    cursor.toArray(function(err, result) {
      if (err) {
        console.log(err);
      } else if (result.length) {
        callback(result.slice());
      }
    })

  });
}
conn(printout);
