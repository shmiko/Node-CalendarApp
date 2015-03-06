(function () {
	'use strict';

	App.Router.map(function() {
		this.route('events');
	});

	App.IndexRoute = Ember.Route.extend({
		model : function() {
			var socket = App.socket,
				data = {};

			socket.emit('openDB', JSON.stringify(data));
			socket.on('openDBstatus', function(data) {
				console.log(data);
			});
		}
	});
  	
}());