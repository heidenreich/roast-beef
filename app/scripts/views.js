console.log('hello view script')
var PastaView = Backbone.View.extend({
	
	className:'pasta',

	penneTemplate: _.template($('#penne-template').text()),

	initialize: function (){
		console.log('hey new PASTA!!!!!!!')
		$('.pasta-pic').append(this.el);
		this.render();
	},

	render: function (){
		this.$el.html(this.penneTemplate())
	}	
});


var ZitiView = Backbone.View.extend({
	
	className:'ziti',

	zitiTemplate: _.template($('#ziti-template').text()),

	initialize: function (){
		console.log('hey new PASTA!!!!!!!')
		$('.pasta-pic').append(this.el);
		this.render();
	},

	render: function (){
		this.$el.html(this.zitiTemplate())
	}	
});


var LinguineView = Backbone.View.extend({
	
	className:'linguine',

	linguineTemplate: _.template($('#linguine-template').text()),

	initialize: function (){
		console.log('hey new PASTA!!!!!!!')
		$('.pasta-pic').append(this.el);
		this.render();
	},

	render: function (){
		this.$el.html(this.linguineTemplate())
	}	
});


var FusilliView = Backbone.View.extend({
	
	className:'fusilli',

	fusilliTemplate: _.template($('#fusilli-template').text()),

	initialize: function (){
		console.log('hey new PASTA!!!!!!!')
		$('.pasta-pic').append(this.el);
		this.render();
	},

	render: function (){
		this.$el.html(this.fusilliTemplate())
	}	
})
