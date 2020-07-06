"use strict";

let credits = 23580;
const pricePerDroid = 3000;
let totalPrice = 0;

totalPrice = prompt(`Какое количество дройдов вы хотите преобрести?`);
if (totalPrice === null) {
  console.log(`Отменено пользователем!`);
} else {
  totalPrice = pricePerDroid * totalPrice;
  if (totalPrice > credits) {
    console.log(`Недостаточно средств на счету!`);
  } else {
    credits -= totalPrice;
    console.log(
      `Вы купили "${totalPrice}" дроидов, на счету осталось "${credits}" кредитов.`
    );
  }
}
