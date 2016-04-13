var express = require('express');
var router = express.Router();

router.get('/ping', function(request, response, next) {
	console.log('I was pinged brah');
	response.send('Pong');
});

module.exports = router;