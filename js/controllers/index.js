(function () {
	'use strict';

	function mapISODateToString (event) {
		event.day = moment(event.day).format('DD MMM YY HH:MM:SS').toString();
	}

  	App.IndexController = Ember.Controller.extend({
  		listEvents: function() {
  			var allEvents = this.get('model.events');
  			allEvents.map(mapISODateToString);

  			return allEvents;
  		}.property('model')
  	});
}());