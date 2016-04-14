/*
	Exercise 2
	How many different variables named "a" are created here?
*/

function createFunction() {
	var a = function() {
		var a = "b";
		return a;
	};
	return a;
}
var a = createFunction();
console.log(a());
