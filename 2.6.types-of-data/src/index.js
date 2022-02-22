(function () {
	'use strict';
	
	let number = 4; //number

	console.log(number/0); //Infinity

	const person = "Alex"; //string

	const bool = true; //boolean

	/* Object */

	const obj = {
		name : "John",
		age: 25,
		isMarried: false
	};
	// console.log(obj.name);
	console.log(obj["name"]);

	/* Array - частный случай объекта */
	let arr = ['plum.png', 'orange.jpeg', 'apple.bmp', {}, []];
	console.log(arr[0]);
	
}());
