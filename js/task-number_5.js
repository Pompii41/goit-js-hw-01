"use strict";

let cost;
const country = prompt(`В какую страну доставить товар?`);

if (country === null) {
  alert("Отменено пользователем");
} else {
  cost = country.toLowerCase();
  сostNext(cost);
}
function сostNext(deliveryCountry) {
  let summary = deliveryCountry[0].toUpperCase() + deliveryCountry.slice(1);
  switch (deliveryCountry) {
    case `китай`:
      console.log(`Доставка в ${summary} будет стоить 100 кредитов`);
      break;
    case `чили`:
      console.log(`Доставка в ${summary} будет стоить 250 кредитов`);
      break;
    case `австралия`:
      console.log(`Доставка в ${summary} будет стоить 170 кредитов`);
      break;
    case `ямайка`:
      console.log(`Доставка в ${summary} будет стоить 120 кредитов`);
      break;
    default:
      console.log(`В вашей стране доставка не доступна`);
  }
}
