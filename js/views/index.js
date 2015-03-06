(function () {
	'use strict';

  App.IndexView = Ember.View.extend({
    onInsert : function() {
      var events = this.get('controller.listEvents'),
          calendarEvents = [];

      events.forEach(function(event) {
        var calendarEvent = {};

        calendarEvent.title = event.event;
        calendarEvent.start = event.day;
        calendarEvent.allDay = false;

        calendarEvents.push(calendarEvent);
      });
      $('#container').fullCalendar({
        events: calendarEvents,
        dayClick : function (event) {
          debugger
        }
      });
    }.on('didInsertElement')
  });
}());