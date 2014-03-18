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
		var match = /a/;
//		return match.test(str);
    },

    matchesPattern : function(str) {
		var match = /a/
//		return match.test(str);
    },
    isUSD : function(str) {

    }
  };
});
