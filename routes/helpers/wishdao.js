function WishDAO () {
  var mongoDB = require ('mongodb').MongoClient;

  var connection = {
    url: 'mongodb://localhost:27017/wishList'
  };
  return({
    getAllWishLists: function(){
      mongoDB.connect(this.url, function(err, db) {
      var curser = db.collection('practiceWishes').find();
      var returnArray = [];
      curser.each(function(err, doc) {
        if(doc) {

        }
      })
        console.log('successful connection')
      })
    },
    saveWishList: function(list) {
      mongoDB.connect(this.url, function(err, db) {
        console.log('successful connection')
      })
    }
  });
}



module.exports = WishDAO;
