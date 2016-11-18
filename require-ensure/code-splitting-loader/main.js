var $ = require('jquery');
$(function(){
	$('input[type=button]').click(function(){
		require('bundle-loader!./a.js')(function(content) {
			console.log('click');
			console.log(content);
		});
	});
});