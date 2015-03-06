/*
* npm packages required: 	socket.io, express, http, request, mongodb, mongoose,
*							mongojs
*/
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
			MongoClient.connect("mongodb://localhost:27017/calendarevents", function(err, db) {
			  if(!err) {
			  	console.log("DB connection succes");
			    socket.emit('openDBstatus', {success : true});

			    socket.on('closeDB', function (data) {
					console.log('closeDB');
					console.log(data);
				});

				socket.on('getEvents', function (data) {
					console.log(data);
					var dateLimit = JSON.parse(data).dateLimit,
						results = db.collection('events')
									.find({day : {$gt : new Date(dateLimit)}})
									.sort({day : 1});
					results.toArray( function (err, d){
			            socket.emit('allEvents', {events : d});
			        });
				});

				socket.on('addEvent', function (data) {

				});
			  } else {
			  	socket.emit('openDBstatus', {success : false});
			  }
			});
		});
	});
})(typeof window == "undefined" ? global : window);