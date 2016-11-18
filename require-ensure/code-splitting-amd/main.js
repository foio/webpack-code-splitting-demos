var $ = require('jquery');

$(function(){
	$('input[type=button]').click(function(){
		require(['./a'], function(a){
			console.log('click............');
			console.log('content');
		});
	});
});



