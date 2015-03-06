(function () {
	'use strict';

  	var App = Ember.Application.create({});
  	window.App = App;
  	App.socket = io.connect('http://localhost:9000');
}());