if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    containsNumber : function(str) {
		var match = /\d/;
		return match.test(str);
    },

    containsRepeatingLetter : function(str) {
		var match = /([A-Za-z])\1/;
		return match.test(str);
    },

    endsWithVowel : function(str) {
		var match = /[AEIOUaeiou]$/
		return match.test(str);
    },

    captureThreeNumbers : function(str) {
		var match = /(\d{3})/;
		var result = match.exec(str);
		if (result) {
			return result[0];
		} else {
			return false;
		};
    },

    matchesPattern : function(str) {
		var match = /^\d{3}-\d{3}-\d{4}$/
		return match.test(str);
    },
    isUSD : function(str) {
		var match = /^\$\d+(?:,\d{3})*(?:\.[\d]{2})*$/;
		return match.test(str);
    }
  };
});
