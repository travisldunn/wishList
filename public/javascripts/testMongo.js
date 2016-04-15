var mongoDB = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/wishList';
var lock = 0;
var printout = function(r) {
  console.log(r);
  lock = 0;
}

var conn = function(callback) {
  console.log("inside conn");
  lock = 1;
  mongoDB.connect(url, function(err, db) {
    console.log("in connect");
    var arrayVar = [];
    var cursor = db.collection('practiceWishes').find();
    cursor.toArray(function(err, result) {
      if (err) {
        console.log(err);
      } else if (result.length) {
        arrayVar.push(result.slice());
        console.log(result.slice());
        callback(result.slice());
      }
    })
    console.log("this is the array " + arrayVar);
  });
}
conn(printout);
// while (lock) {
var clearLock = false;
var timeout = setTimeout(function() {
      if(lock===0){
        clearLock = true;
      }
      console.log("waiting ...");

    },
    2000);
    if(clearLock) {
      clearTimeout(timeout);
    }
// }
console.log("hey, this is the end!!");
