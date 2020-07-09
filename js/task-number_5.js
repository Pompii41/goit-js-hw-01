"use strict";
const country = prompt(`В какую страну доставить товар?`);
if (country === null) {
  console.log("Отменено пользователем!");
} else {
  let summary = country[0].toUpperCase() + country.slice(1);
  switch (country.toLowerCase()) {
    case "китай":
      console.log(`Доставка в ${summary} будет стоить 100 кредитов`);
      break;
    case "чили":
      console.log(`Доставка в ${summary} будет стоить 250 кредитов`);
      break;
    case "австралия":
      console.log(`Доставка в ${summary} будет стоить 170 кредитов`);
      break;
    case "ямайка":
      console.log(`Доставка в ${summary} будет стоить 120 кредитов`);
      break;
    default:
      console.log(`В вашей стране доставка не доступна`);
  }
}
