(function () {
	'use strict';

	App.Router.map(function() {
		this.route('events');
	});

	App.IndexRoute = Ember.Route.extend({
		model : function() {
			var socket = App.socket,
				data = {},
				deferred = $.Deferred();

			socket.emit('openDB', JSON.stringify(data));
			socket.on('openDBstatus', function(data) {
				if(data.success) {
					var eventsData = {
						dateLimit : moment(new Date()).startOf('month').toISOString()
					};
					socket.emit('getEvents', JSON.stringify(eventsData));
					socket.on('allEvents', function (data) {
						deferred.resolve(data);
					});
				}
			});
			return deferred.promise();
		}
	});
  	
}());