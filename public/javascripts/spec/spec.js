// var WishList = require('../../routes/data/WishList');
// var wishFactory = 
//var Item = require('../../routes/data/item.js');
var wishLists = [];

function WishList (name, description) {
	var self = this;

	self.name = name;
	self.description = description;
}

describe("View and Interact with WishLists", function() {
	it('check wishlists array', function() {
		

		var wl1 = new WishList('Jeff', 'Christmas List');
		var wl2 = new WishList('Jeff', 'Awesome List');

		// wl1 = {
		// 	name : 'Jeff',
		// 	description : 'Christmas List'
		// };
		// var wl2 = null;

		// wl2 = {
		// 	name : 'Jeff',
		// 	description : 'Awesome List'
		// };

		expect(wl1.name).toBe("Jeff");
		expect(wl1.description).toBe("Christmas List");
		expect(wl2.name).toBe("Jeff");
		expect(wl2.description).toBe("Awesome List");
	});
});