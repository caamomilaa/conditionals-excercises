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
  console.log("Camila atiende " + totalCalls + " llamadas por hora.");
}

getTotalCalls(120, 4);

// // 2️⃣ Bego compró 5 cajas de lápices. Cada caja tiene 12 lápices. ¿Cuántos lápices tiene en total?

function getMultiplication(numberA, numberB) {
  return numberA * numberB;
}

function getTotalPencils(boxes, pencils) {
  const totalPencils = getMultiplication(boxes, pencils);
  console.log("Bego tiene " + totalPencils + " lápices.");
}
getTotalPencils(5, 12);

// // 3️⃣ Camila tiene 25 caramelos y quiere repartirlos en grupos de 4. ¿Cuántos caramelos le sobrarán después del reparto?

function getRemainder(numberA, numberB) {
  return numberA % numberB;
}

function getLeftCandys(candys, groups) {
  const leftCandys = getRemainder(candys, groups);
  console.log("Sobra " + leftCandys + " caramelo.");
}
getLeftCandys(25, 4);

// // 9️⃣ Camila tenía 45 libros y compró 23 más. ¿Cuántos libros tiene ahora?

function getAddition(numberA, numberB) {
  return numberA + numberB;
}

function getTotalBooks(ownBooks, boughtBooks) {
  const totalBooks = getAddition(ownBooks, boughtBooks);
  console.log("En total tiene " + totalBooks + " libros.");
}

// // 1️⃣7️⃣ Abby mata 5201 infectados cada semana. ¿Cuántos infectados mata al día?

function getRuleOfThree(multiplayerA, multiplayerB, divider) {
  return (multiplayerA * multiplayerB) / divider;
}

function getInfectedKilledPerDay(infecteds, daysOfAWeek, day) {
  const infectedKilledPerDay = getRuleOfThree(infecteds, day, daysOfAWeek);
  console.log("Al día mata " + infectedKilledPerDay + " infectados.");
}
getInfectedKilledPerDay(5201, 7, 1);
