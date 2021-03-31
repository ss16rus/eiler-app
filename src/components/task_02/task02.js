// Каждый следующий элемент ряда Фибоначчи получается при сложении двух предыдущих.
// Начиная с 1 и 2, первые 10 элементов будут:
// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
// Найдите сумму всех четных элементов ряда Фибоначчи,
// которые не превышают четыре миллиона.

import React from 'react';

function Task ({children, limit}) {
	let firstFbn = 1;
	let secondFbn = 2;
	let thirdFbn = 3;

	let sum = secondFbn;

	while ( thirdFbn < limit ) {
		firstFbn = secondFbn;
		secondFbn = thirdFbn;
		thirdFbn = firstFbn + secondFbn;

		if ( thirdFbn%2 == 0 ) sum += thirdFbn;
	}

	return (
		<div>
			{children}: sum = {sum}
		</div>
	)
}

export default Task;