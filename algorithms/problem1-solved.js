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