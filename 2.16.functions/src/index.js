(function () {
	'use strict';

	//функція з аргументами
	/* let num = 20;
	function showFirstMessage(text) {
		console.log(text);
		//якщо ми об'являємо функцію всередині функції, то зовні вона вже не доступна
		num = 30;
		console.log(num);
	}

	showFirstMessage('Hello world!');
	//немає доступу до змінної
	console.log(num); */

	//функція з двома аргументами:
	/* function calc(a, b) {
		return (a + b);
		// після return нічого вже в функції не буде працювати
	}

	console.log(calc(2, 3));
	console.log(calc(5, 3));
	console.log(calc(6, 3)); */


	//оскільки функція повертає нам результат, ми присвоюємо функцію в змінну при викликанні
	/* function ret() {
		let num = 50;
		return num;
	}
	const anotherNum = ret();
	console.log(anotherNum); */


	//Класифікація функцій:
	//function declaration
	/* function foo() {
		//Створюється до початку виконання скрипту, можно визвати до об'явлення
	} */
	//function expression
	/* let foo = function() {
		//Створюється тільки тоді, коли доходить потік коду, можно визвати тільки після декларацію
	} */
	//стрілочна:
	/* ()=> {
		//не має властного контексту (this)
	} */


	//перший виклик спровокує помилку:
	/* logger();
	const logger = function() {
		console.log("Hello");
	}
	logger(); */


	//Стрілочна функція:
	const calc = (a, b) => {
		console.log('1');
		return a + b;
	} ;
	console.log(calc(2, 3));
	console.log(calc);
	





	
}());
