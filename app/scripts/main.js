console.log('hello main script');

$(document).ready(function(){

	router = new MainRouter();

	Backbone.history.start();
});

