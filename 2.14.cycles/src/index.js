(function () {
	'use strict';
	
	let num = 50;

	//цикл while
	/* while (num < 55) {
		console.log(num);
		num++;
	} */

	//цикл do while
	/* do {
		console.log(num);
		num++;
	}
	while (num < 55); */

	//cycle for
	/* for (let i = 1; i < 8; i++) {
		console.log(num);
		num++;
	} */

	/* for (let i = 1; i < 10; i++) {
		if (i === 6) {
			console.log(i);
			break;
		}
		console.log(i);
	} */

	for (let i = 1; i < 10; i++) {
		if (i === 6) {
			continue;
		}
		console.log(i);
	}


	
}());
