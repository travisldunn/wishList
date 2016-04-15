var mongoDB = require ('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/wishList';
mongoDB.connect(url, function(err, db) {
  if(err) {
    console.log("error: " + err);
  }
  else {
    console.log("successful");
    db.collection('practiceWishes').insert({name: 'NupLion'}, function(err, result) {
      if(err) {
        console.log("error: " + err);
      }
      else{
        console.log("successful insertion: " + result);
      }
      db.close();
    });
  }
});
