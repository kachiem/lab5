// Get all of our friend data
var data = require('../data.json');
//app.get("/data/:userName", );

exports.view = function(req, res){
	console.log(data);
	res.render('index', {
		'name': data.name,
		'imageURL' : data.imageURL,
		'description' : data.description
	});
	//console.log("got here");
};