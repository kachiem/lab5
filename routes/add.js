var data = require("../data.json");

exports.addFriend = function(req, res) {    
	// Your code goes here
	console.log(data);
	res.render('index', {
		'name': data.name,
		'imageURL' : data.imageURL,
		'description' : data.description
	});
	res.query.name();
	res.query.description();
	console.log("that's a yikes from me");

 }

{
	"newFriend": [
		{
			"name": "Doug Engelbart",
			"description": "Has awesome pet mice",
			"imageURL": "http://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Douglas_Engelbart_in_2008.jpg/972px-Douglas_Engelbart_in_2008.jpg"			
		},
	]
}
 
data.friends.push(newFriend);