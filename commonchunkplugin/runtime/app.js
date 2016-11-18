var $ = require('jquery');
var _ = require('lodash');
$(function(){
	window.addEventListener('scroll',_.throttle(function(){
		console.log('window scroll......');
		console.log('change');
	}));
});
