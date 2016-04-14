/*
	Is craneId global or local on line 8?
	Why is isViable not global on line 18?
	Put into english what makes a "viable" crane by reading through the function isViableCrane
*/

function createCrane(boomHeight, hoistLength) {
	craneId = craneId + 1;
	return {
		craneId : craneId,
		boomHeight : boomHeight,
		hoistLength : hoistLength
	};
}

function isViableCrane(crane) {
	if (crane.hoistLength > crane.boomHeight) {
		isViable = true;
	} else {
		isViable = false;
	}
	var isViable;
	return isViable;
}

var craneId = 0;
var cranes = [
	createCrane(10, 15),
	createCrane(12, 5),
	createCrane(7, 10)
];

for (var c in cranes) {
	if (isViableCrane(cranes[c])) {
		console.log(cranes[c]);
	}
}

