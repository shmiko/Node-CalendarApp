(function () {
	'use strict';

  	var app = require('express').createServer();
	var io = require('socket.io')(app);

	app.listen(9000);

	io.on('connection', function (socket) {
	  socket.on('getEvents', function (data) {
	    console.log(data);
	  });
	});
}());