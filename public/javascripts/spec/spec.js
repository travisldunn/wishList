var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
// var xhr = new XMLHttpRequest();
// var WishList = require('../../routes/data/WishList');
// var wishFactory = 
//var Item = require('../../routes/data/item.js');

var WishDAO = function() {
	var self = this;
	self.getWishLists = function() {
		var wishLists = [];
		wishLists.push(new WishList('Jeff', 'Christmas List'));
		wishLists.push(new WishList('Jeff', 'Awesome List'));
		return wishLists;
	};
};

var gblLock = 0;
var gbl = null;

var xhrMethod = function(method, url, callback) {
	console.log('INSIDE XHR METHOD');
	var xhr = new XMLHttpRequest();
	xhr.open(method, url);

	xhr.onreadystatechange = function () {
		console.log('READY STATE CHANGE');
		if(xhr.readyState === 4) {
			console.log('Have a response');
			gblLock = 0;
			callback(xhr.responseText);
		// } else if (xhr.readyState === 4){
		// 	gblLock = 0;
		// 	console.log('ERROR: ' + xhr.status);
		} 
		else {
			console.log('State: ' + xhr.readyState + ' Status: ' +
				xhr.status);
		}

	};
	
	gblLock =1;

	xhr.send();

};

var CB = function(response) {
	gbl = response;
};

function WishList (name, description) {
	var self = this;

	self.name = name;
	self.description = description;
}


describe("View and Interact with WishLists", function() {
	it('check wishlists array', function() {
		
		// wishLists.push(new WishList('Jeff', 'Christmas List'));
		// wishLists.push(new WishList('Jeff', 'Awesome List'));
		var dao = new WishDAO();
		var wishLists = dao.getWishLists();
		var wl1 = wishLists[0];
		var wl2 = wishLists[1];


/****************************************************
*       DO NOT EDIT BELOW THIS LINE                 *
****************************************************/
		expect(wl1.name).toBe("Jeff");
		expect(wl1.description).toBe("Christmas List");
		expect(wl2.name).toBe("Jeff");
		expect(wl2.description).toBe("Awesome List");
	});
});

describe("Making a Connection from Client to Server", function() {
	it('establishes ajax to server routes', function() {
		xhrMethod('GET', 'http://localhost:8686/ping/ping', CB);
		while (gblLock === 1) {
			var timeToWait = 5000;
			setTimeout(function() {}, timeToWait);
			// console.log('INSIDE LOCK GBLock = ' + gblLock);
		}
		expect(gbl).toBe('Pong');
	});
});



















