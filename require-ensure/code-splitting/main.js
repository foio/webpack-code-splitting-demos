var $ = require('jquery');

$(function(){
	$('input[type=button]').click(function(){
		require.ensure(['./a'], function(require) {
  			var content = require('./a');
  			console.log('click...........');
  			console.log(content);
		});
	});
});



