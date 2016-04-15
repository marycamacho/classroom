//Write a function which takes an array of numbers and returns the minimum of that array.
//[3,4,5] -> 3
//[2, -30] -> -30

function minimum(arr) {
	var minSoFar = arr[0];
	for (var i = 1; i < arr.length; i++) {
		if(arr[i] < minSoFar) {
			minSoFar = arr[i];
		}
	}
	return minSoFar;
}

console.log(minimum([3,4,5]) == 3);
console.log(minimum([2, -30]) == -30);
console.log(minimum([0,1,2,-3]) == -3);
console.log(minimum([0]) == 0);

//Write a function which takes an array of numbers and returns the maximum of that array.

function maximum(arr) {
	var maxSoFar = arr[0];
	for (var i = 1; i < arr.length; i++) {
		if(arr[i] > maxSoFar) {
			maxSoFar = arr[i];
		}
	}
	return maxSoFar;
}

console.log(maximum([3,4,5]) == 5);
console.log(maximum([-10, 2]) == 2);

//Write a function which takes an array of numbers and returns the average of that array.

function averageArray (list) {
	var sumArray = list.reduce(function(pv, cv) {
		return pv + cv;
	}, 0);
	return sumArray / list.length;
}

console.log(averageArray([2, 4, 6]) == 4);
console.log(averageArray([0, 0, 0, 10]) == 2.5);

//Write a function which takes an array of integers > 0 and returns  the first integer which does not appear in that array.
// I'm assuming that the lists provided are sorted.

function missingFirst (list) {
	for (var possibleMissing = 1; possibleMissing <= maximum(list)+1; possibleMissing++) {
		if(list.indexOf(possibleMissing)== -1) {
			return possibleMissing;
		}
	}
}

console.log(missingFirst([1,2,5]) == 3);
console.log(missingFirst([1,2,3,4,5]) == 6);

//Write a function which takes an array of integers and returns an array with any duplicate integers removed.

// Below is a cool new way that only works in new browsers. It  creates a 'new Set' via the 'set' constructor which takes the passed in array and 'set' intrinsically creates a list of distinct values then, 'array.from' converts the set into a new array.

function dupsRemoved (list) {
	return Array.from(new Set(list));
}

console.log(dupsRemoved([1,1,2,3,1,2,3]).toString() == [1,2,3].toString());
console.log(dupsRemoved([1,4,4,4,2,2,4,4,4]).toString() == [1,4,2].toString());

// Here is the for loop version that will work everywhere.

function dupsRemoved2 (list) {
	var cleanList = [];
	for (var i = 0; i < list.length; i++) {
		if (cleanList.indexOf(list[i]) == -1) {
			cleanList.push(list[i]);
		}
	}
	return cleanList;
}
console.log(dupsRemoved2([1,1,2,3,1,2,3]).toString() == [1,2,3].toString());
console.log(dupsRemoved2([1,4,4,4,2,2,4,4,4]).toString() == [1,4,2].toString());

//Write a function which takes an array of integers > 0 and returns an array of integers which only occur once in the original array.


// isDuped is a function which takes in the original array and returns a true false on each element if it is duplicated in the list. In the unique function, we run the isDuped function with a filter against the list - and we only return the elements of our array if they are not duplicated. Then we sort the resultant list so that it passes the test. (I got some help here!!)

function uniques(list) {

	function isDuped(list, item) {
		var dupList = list.filter(function (el) {
			return el === item;
		});
		return (dupList.length > 1);
	}

	return list.filter(function (el) {
		return !isDuped(list, el);
	}).sort();
}

var a = [1,2,3,5,3,2,4,1];
console.log(uniques(a));


console.log(uniques([1,1,2,2,3]).toString() == [3].toString());
console.log(uniques([1,2,3,5,3,2,4,1]).toString() == [4, 5].toString());
