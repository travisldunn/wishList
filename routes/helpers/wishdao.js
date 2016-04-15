function WishDAO() {
  console.log('inside wish dao');
    var mongoDB = require('mongodb').MongoClient;

    var connection = {
        url: 'mongodb://localhost:27017/wishList'
    };
    return ({
        getAllWishLists: function(callback) {
          console.log('inside get all wish lists');
            mongoDB.connect(connection.url, function(err, db) {
              if (err) {
                console.log('inside connection err: '+err);
              }
              console.log('inside the connect');
                var cursor = db.collection('practiceWishes').find();
                cursor.toArray(function(err, result) {
                    if (err) {
                        console.log(err);
                    } else if (result.length) {
                        callback(result.slice());
                    }
                })
            })
        },
        saveWishList: function(list,callback) {
            mongoDB.connect(connection.url, function(err, db) {
                if (err) {
                  console.log('insert connection error: ' + err);
                }
                var insertReturn = db.collection('practiceWishes').insert(list);
                callback(insertReturn);
            })
        }
    });
}

module.exports = WishDAO;
