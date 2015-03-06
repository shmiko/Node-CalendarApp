(function () {
	'use strict';

  	var app = require('express')(),
		server = require('http').Server(app),
		io = require('socket.io')(server);

	server.listen(9000);
	console.log('Server started at port 9000..!');

	io.on('connection', function (socket) {
		var MongoClient = require('mongodb').MongoClient;

		socket.on('openDB', function (data) {
			// Connect to the db
			MongoClient.connect("mongodb://localhost:27017/test", function(err, db) {
			  if(!err) {
			    socket.emit('openDBstatus', {success : 'success'});
			  }
			});
		});

		socket.on('closeDB', function (data) {
			console.log(data);
		});

		socket.on('getEvents', function (data) {
			console.log(data);
		});

		socket.on('addEvent', function (data) {
			console.log(data);
		});

	});
})(typeof window == "undefined" ? global : window);