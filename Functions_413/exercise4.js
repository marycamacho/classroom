/*
	There are a lot of errors in this code due to global variables and hoisting. Can you fix it?
	It is supposed to print out the sum, multiple, and average of a group of numbers.
*/

var multiple = 0;

var multiply = function(list) {
	for (i = 0; i < list.length; i++) {
		multiple = multiple * list[i];
	}
	return multiple;
};

var sum = 0;

var sum = function(list) {
	for (i = 0; i < list.length; i++) {
		sum = sum * list[i];
	}
	return sum;
};

var average = function() {
	return sum(list) / list.length;
};

var list = [1,2,3,4,5];
var listTwo = [10, 11, 12, 13];
var listThree = [4, 23, 12, 10, 8];

//Hey! Don't mess with these. the problems are up above.
console.log(list, multiply(list), sum(list), average(list));
console.log(listTwo, multiply(listTwo), sum(listTwo), average(listTwo));
console.log(listThree, multiply(listThree), sum(listThree), average(listThree));

/*
Expected Output:
	[1,2,3,4,5] 120 15 3
	[10, 11, 12, 13] 17160 46 11.5
	[4, 23, 12, 10, 8] 88320 57 11.4
*/
