var MainRouter = Backbone.Router.extend({

	routes: {
		"about" 			: "aboutPage",
		"about/:name" 	: "aboutPage"
	},

	initialize: function(){
		console.log('we initialized a router!')
	},

	aboutPage: function(name){
		if(name){
			console.log('You are at the about page', name)
		} else {
			console.log('BOOM, you are at the about/name pages (bitches)!')
		}
	}
})
