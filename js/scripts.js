// 1️⃣ Camila quiere montar en una atracción y no sabe si la dejarán subir, la altura mínima para subir son 150cm. Haz una función que reciba la altura en cm y determine si Camila puede montar o no.

const isCamilaValid = (camilasHeigth, minimunHeigth) => {
	if (camilasHeigth >= minimunHeigth) {
		console.log('Camila puede subir.');
	} else {
		console.log('Camila no puede subir.');
	}
};
isCamilaValid(160, 150);

// 2️⃣ Bego está intentando conseguir envío gratuito en su pedido online. Crea una función que reciba como parámetro el total de su compra y determine si supera los 50€ para obtener el envío gratis o si tendrá que pagarlo.

const hasFreeShipping = (totalPurchased, minimunForFreeShipping) => {
	if (totalPurchased < minimunForFreeShipping) {
		console.log('No tendrá envío gratuito.');
	} else {
		console.log('Si tiene envío gratuito.');
	}
};
hasFreeShipping(50, 50);

// 3️⃣ Sabrina quiere saber si un número es múltiplo de 7. Crea una función que reciba un número y determine si es múltiplo o no.

const isMultipleOfMultiplier = (number, multiplier) => {
	if (number % multiplier === 0) {
		console.log('Es múltiplo de ' + multiplier);
	} else {
		console.log('No es múltiplo de ' + multiplier);
	}
};
isMultipleOfMultiplier(14, 7);

// 4️⃣ Abby está evaluando candidatos para su equipo. Los candidatos harán tres pruebas y cada una se evalúa de 0 a 10. Si la media está entre 0 y 4 mostrará el mensaje "Estás Fuera", si la media está entre 5 y 7 mostrará "Entras en la reserva" y si la media es 8 o más dirá "Salimos al amanecer".

const isValidForTheTeam = (firstTest, secondTest, thirdTest) => {
	const testAverage = (firstTest + secondTest + thirdTest) / 3;
	if (testAverage > 0 && testAverage <= 4) {
		console.log('Estás fuera.');
	} else if (testAverage >= 5 && testAverage <= 7) {
		console.log('Entras en la reserva.');
	} else if (testAverage >= 8) {
		console.log('Salimos al amanecer.');
	}
};

isValidForTheTeam(10, 7, 7);

// 5️⃣ Macarena tiene tres perros de distintas razas y quiere saber cuál de ellos es el más grande. Crea una función que reciba el peso de los tres perros y determine cuál es el más pesado.

const whoIsTheMostHeavy = (firstDog, secondDog, thirdDog) => {
	if (firstDog > secondDog && firstDog > thirdDog) {
		console.log('El primero es el más gordo.');
	} else if (secondDog > firstDog && secondDog > thirdDog) {
		console.log('El segundo es el más gordo.');
	} else {
		console.log('El tercero es el más gordo.');
	}
};
whoIsTheMostHeavy(40, 40, 50);

// 6️⃣ Camila está organizando un sorteo y cada participante tiene un número. Si el número es divisible por 3, gana un descuento. Si es divisible por 5, recibe un regalo. Si es divisible por ambos, obtiene el premio mayor. Si no es divisible por ninguno, no gana nada. Crea una función que reciba un número entero y determine qué premio le corresponde.

const whatDoYouWin = number => {
	if (number % 3 === 0 && number % 5 === 0) {
		console.log('Has ganado una tarjeta regalo.');
	} else if (number % 5 === 0) {
		console.log('Has ganado un par de calcetines.');
	} else if (number % 3 === 0) {
		console.log('Has ganado un descuento del 5%.');
	} else {
		console.log('Pringao, no has ganado nada.');
	}
};
whatDoYouWin(15);

// 7️⃣ Bego está repartiendo golosinas entre sus amigos. Si la cantidad de golosinas es un número par, podrá dividirlas equitativamente. Si es impar, sobrará una y alguien tendrá que decidir qué hacer con ella. Crea una función que reciba un número entero y determine si es par o impar, mostrando el mensaje correspondiente.

const isEvenOrOdd = number => {
	if (number % 2 === 0) {
		console.log('Divido las golosinas entre mis aimigos.');
	} else {
		console.log('Me quedo todas para mí.');
	}
};
isEvenOrOdd(3);

// 8️⃣ Sabrina está planificando un viaje muy especial para celebrar el año nuevo y quiere saber si el año en el que piensa viajar es bisiesto, ya que eso afectará la fecha del viaje. Crea una función que reciba un año como parámetro y determine, siguiendo la regla de que un año es bisiesto si es divisible por 4, pero no por 100, a menos que también sea divisible por 400, si es bisiesto ("Es un año bisiesto") o si no lo es ("No es un año bisiesto").

const isLeapYear = year => {
	if (
		(year % 4 === 0 && year % 100 !== 0) ||
		(year % 4 === 0 && year % 100 === 0 && year % 400 === 0)
	) {
		console.log('Es un año bisiesto.');
	} else {
		console.log('No es un año bisiesto.');
	}
};
isLeapYear(2000);

// 9️⃣ Abby está hackeando un sistema de seguridad en una misión secreta. Para acceder, debe introducir un código numérico. La puerta solo se abrirá si el número es par y mayor que 50, o si es impar pero un múltiplo de 7. Crea una función que reciba un número y determine si Abby podrá entrar ("Acceso concedido") o si la puerta seguirá bloqueada ("Acceso denegado").

const isAbbyARealHacker = numericCode => {
	if (
		(numericCode % 2 === 0 && numericCode > 50) ||
		(numericCode % 2 !== 0 && numericCode % 7 === 0)
	) {
		console.log('Acceso concedido.');
	} else {
		console.log('Acceso denegado.');
	}
};
isAbbyARealHacker(58);

// 🔟 Macarena está evaluando la salud de sus perros según su peso y edad. Un perro se considera en peso saludable sólo si pesa entre 8 y 30 kg. Además solo se considerará saludable si su edad es un número múltiplo de 3 y menor de 15. Crea una función que reciba el peso del perro y su edad. Determina si está saludable ("El perro está saludable") o si no ("Perro pocho 😢").

const isTheDogHealthy = (age, weight) => {
	if (weight >= 8 && weight <= 30 && age % 3 === 0 && age < 15) {
		console.log('El perro está saludable.');
	} else {
		console.log('Perro pocho 😢');
	}
};
isTheDogHealthy(9, 40);
