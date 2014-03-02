if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
		return arr.indexOf(item);
    },

    sum : function(arr) {
		if (arr == false) {
			return 0;
		} else {
			return arr.pop() + this.sum(arr);
		};
    },

    remove : function(arr, item) {
		var doomedIndex = this.indexOf(arr, item);

		if (doomedIndex === -1) {
			return arr;
		} else {
		arr.splice(doomedIndex, 1);
		this.remove(arr, item);
		return arr;
		};
    },

    removeWithoutCopy : function(arr, item) {
		var arrCopy = arr;

		this.remove(arrCopy, item);
		return arr;
    },

    append : function(arr, item) {
		arr.push(item);
		return  arr;
    },

    truncate : function(arr) {
		arr.pop();
		return arr;
    },

    prepend : function(arr, item) {
		var newArr = [item];
		var size = arr.length;
		
		for (var i = 0; i < size; i++) {
			newArr.push(arr[i]);
		}
		return newArr;
    },

    curtail : function(arr) {
		var newArr = [];
		var size = arr.length;
		
		for (var i = 1; i < size; i++) {
			newArr.push(arr[i]);
		};
		return newArr;
    
    },

    concat : function(arr1, arr2) {
		var size = arr2.length;

		for (var i = 0; i < size; i++) {
			arr1.push(arr2[i]);
		};
		return arr1;
    },

    insert : function(arr, item, index) {
		arr.splice(index, 0, item);
		return arr;
    },

    count : function(arr, item) {
		var size = arr.length;
		var times = 0

		for (var i = 0; i < size; i++ ) {
			if (arr[i] === item) {
				times++;
			};
		};

		return times;
    },

    duplicates : function(arr) {
		var size = arr.length;
		var values = [];

		for (var i = 0; i < size; i++) {
			if (values.indexOf(arr[i]) === -1) {
				values.push(arr[i]);
			};
		};
		
		size = values.length;
		for (var i = 0; i < size; i++){
			if (this.count(arr, values[i]) <= 1) {
				this.remove(values, values[i]);
			};
		};

		return values;
    },

    square : function(arr) {
		return arr.map(function(a){ return a*a});
    },

    findAllOccurrences : function(arr, target) {
		var size = arr.length;
		var newArr = [];

		for (var i = 0; i < size; i++) {
			if (arr[i] === target) {
				newArr.push(i);
			};
		}
		return newArr;
    }
  };
});
