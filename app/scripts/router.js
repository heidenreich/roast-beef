console.log('hello router script')
var MainRouter = Backbone.Router.extend({

	routes: {
		"about" 			: "aboutPage",
		"about/:name" 	: "aboutPage",
		"ziti"			: "zitiPage",
		"penne"			: "pennePage",
		"linguine"		: "linguinePage",
		"fusilli"		: "fusilliPage" 
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
		console.log('test')
	},

	pennePage: function(){
		$('.pasta-pic').html('');
		new PastaView();
		console.log('testing')
	},

	zitiPage: function (){
		$('.pasta-pic').html('');
		new ZitiView()
	},

	linguinePage: function (){
		$('.pasta-pic').html('');
		new LinguineView()
	},

	fusilliPage: function (){
		$('.pasta-pic').html('');
		new FusilliView()
	}



})
