var MongoClient = require('mongodb').MongoClient, Server = require('mongodb').Server;

module.exports.startDB = function() {
	var mongoClient = new MongoClient(new Server('localhost', 27017));
	mongoClient.open(function(err, mongoClient) {
	  var db1 = mongoClient.db("mydb");

	  mongoClient.close();
	});
}

module.exports.dbLocation = "mongodb://localhost/mydb";