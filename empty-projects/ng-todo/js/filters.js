angular.module('CoolFilters', []).filter('altCaps', function() {
	return function(input) {
		var charArray = input.split('');
		charArray = charArray.map(function(el, index) {
			return index % 2 === 0 ? el.toUpperCase(el) : el.toLowerCase(el);
		});
		return charArray.join('');
	};
});