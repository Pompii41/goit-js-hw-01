"use strict";

let total = 0;
let input;

do {
  let input = prompt("Вводите числа пока не надоест");

  if (input === null) {
    console.log("Отменено пользователем!");
    break;
  }

  input = Number(input);
  const nameNaN = isNaN(input);

  if (nameNaN) {
    alert("Ошибка ввода!!!Вводите числа! ");
    continue;
  }

  total += input;
} while (input !== null);

alert(`Общая сумма чисел равна ${total}`);
