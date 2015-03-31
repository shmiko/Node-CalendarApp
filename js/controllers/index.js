(function () {
	'use strict';

	function mapISODateToString (event) {
		event.day = moment(event.day).format('DD MMM YY HH:MM:SS').toString();
	}

  	App.IndexController = Ember.Controller.extend({
      eventText : "",
      saveStatus : 'Save Event',

  		listEvents: function() {
  			var allEvents = this.get('model.events');
  			allEvents.map(mapISODateToString);

  			return allEvents;
  		}.property('model'),

      actions : {
        saveEvent : function() {
          this.set('saveStatus', 'Saving');
          this.set('saveStatus', 'Saved');
          $('#myModal').modal('hide');
        }
      }
  	});
}());