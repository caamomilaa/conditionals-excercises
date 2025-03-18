function getDouble(number) {
  return number * 2;
}
function sumNumbers(numberA, numberB) {
  const result = numberA + numberB;
  return result;
}
function getTotalDogs(quantityA, quantityB) {
  const totalDogs = sumNumbers(quantityA, quantityB);
  const doubleDogs = getDouble(totalDogs);

  console.log(doubleDogs);
}
getTotalDogs(5, 8);

// // 1️⃣ Camila atiende 120 llamadas en 4 horas. ¿Cuántas llamadas atiende por hora?

function getDivision(numberA, numberB) {
  return numberA / numberB;
}
function getTotalCalls(calls, hours) {
  const totalCalls = getDivision(calls, hours);
  console.log('Camila atiende ' + totalCalls + ' llamadas por hora.');
}

getTotalCalls(120, 4);

// // 2️⃣ Bego compró 5 cajas de lápices. Cada caja tiene 12 lápices. ¿Cuántos lápices tiene en total?

function getMultiplication(numberA, numberB) {
  return numberA * numberB;
}

function getTotalPencils(boxes, pencils) {
  const totalPencils = getMultiplication(boxes, pencils);
  console.log('Bego tiene ' + totalPencils + ' lápices.');
}
getTotalPencils(5, 12);

// // 3️⃣ Camila tiene 25 caramelos y quiere repartirlos en grupos de 4. ¿Cuántos caramelos le sobrarán después del reparto?

function getRemainder(numberA, numberB) {
  return numberA % numberB;
}

function getLeftCandys(candys, groups) {
  const leftCandys = getRemainder(candys, groups);
  console.log('Sobra ' + leftCandys + ' caramelo.');
}
getLeftCandys(25, 4);

// // 9️⃣ Camila tenía 45 libros y compró 23 más. ¿Cuántos libros tiene ahora?

function getAddition(numberA, numberB) {
  return numberA + numberB;
}

function getTotalBooks(ownBooks, boughtBooks) {
  const totalBooks = getAddition(ownBooks, boughtBooks);
  console.log('En total tiene ' + totalBooks + ' libros.');
}

// // 1️⃣7️⃣ Abby mata 5201 infectados cada semana. ¿Cuántos infectados mata al día?

function getRuleOfThree(multiplayerA, multiplayerB, divider) {
  return (multiplayerA * multiplayerB) / divider;
}

function getInfectedKilledPerDay(infecteds, daysOfAWeek, day) {
  const infectedKilledPerDay = getRuleOfThree(infecteds, day, daysOfAWeek);
  console.log('Al día mata ' + infectedKilledPerDay + ' infectados.');
}
getInfectedKilledPerDay(5201, 7, 1);

// 1️⃣ Camila quiere montar en una atracción y no sabe si la dejarán subir, la altura mínima para subir son 150cm. Haz una función que reciba la altura en cm y determine si Camila puede montar o no.

const isCamilaValid = (camilasHeigth, minimuHeigth) => {
  if (camilasHeigth >= minimuHeigth) {
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

const isValidToTheTeam = (firstTest, secondTest, thirdTest) => {
  const testAverage = (firstTest + secondTest + thirdTest) / 3;
  if (testAverage > 0 && testAverage <= 4) {
    console.log('Estás fuera.');
  } else if (testAverage >= 5 && testAverage <= 7) {
    console.log('Entras en la reserva.');
  } else if (testAverage >= 8) {
    console.log('Salimos al amanecer.');
  }
};

isValidToTheTeam(10, 7, 7);

// 5️⃣ Macarena tiene tres perros de distintas razas y quiere saber cuál de ellos es el más grande. Crea una función que reciba el peso de los tres perros y determine cuál es el más pesado.

const whoIsTheMostHeavy = (firstDog, secondDog, thirdDog) => {
  if (firstDog > secondDog && firstDog > thirdDog) {
    console.log('Tu eres el más gordo.');
  }
};
whoIsTheMostHeavy(50, 10, 40);
