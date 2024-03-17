// String => '',  "" , ``(backtic)

// let name = 'IT';
// let status = title + " " + name + " " + 'Academy' ;
// let status = `${title} ${name} Academy`;

// console.log(str.length);
// console.log(str[3]);

// STRING
// index(xarflar joylashuv urni) => xar doim 0 dan boshlanadi
// length(uzunlik) => xar doim 1 dan boshlanadi
// \n => new line
// \t => tab
// \r => right dagi sozni olib beradi
// console.log(str[str.length - 1]); => oxirgi xarfni olish

// let title = 'Webbrain \t Academy';
// let title = 'Webbrain \r Academy';

// ///////////////////////////////////////////////////////////////////////

// <<<< string methods >>>>>

// let title = 'Webbrain';

// let toLowerCase = title.toLowerCase(); => kichkinaga ugiradi
// let toUpperCase = title.toUpperCase(); => kattaga ugiradi
// let trimming = title.trim(); => ikki yondagi white space ni uchirib beradi
// let starting = title.startsWith('W'); => text nima bilan boshlanayotganini tekshirib, true/false qaytaradi
// let ending = title.endsWith('n'); => text nima bilan tugayotganini tekshirib, true/false qaytaradi
// let padstarting = title.padStart(16, 'n'); => oldidan malumot qushish, 1-qiymat nechtaligi, 2-qiymat nimaligi
// let padending = title.padEnd(11, '.'); => oxiridan malumot qushish, 1-qiymat nechtaligi, 2-qiymat nimaligi
// let replacing = title.replace('Web', 'IT'); => urnini almashtirish, 1-qiymat nimani almashtirish, 2-qiymat nimaga almashtririh
// let repeating = title.repeat(10); => takrorlash, faqatgina son qiymat oladi, yani nech marta takrorlanishi
// let concating = title.concat(" ",status, " ", 'IT'); => malumot qushish, xoxlagancha malumot qusha olamiz
// let including = title.includes('y'); => malum qiymat bor yuq;igini tekshirib, boolean qiymat qaytaradi
// let indexof = title.indexOf('b'); => malum xarf qaysi indexda joylashganini korsatadi boshidan
// let lastindex = title.lastIndexOf('b'); => malum xarf qaysi indexda joylashganini korsatadi oxiridan
// let charatting = title.charAt(2); => index oladi, usha indexdagi qiymatni olib beradi
// let cutting = title.substring(2, 6); => textni kesib olish, 1-qiymat index(boshlanish), 2-qiymat length, nechtaligi


/////////////////////////////////////////////////////////////////////

// <<<<<< regex >>>>>>

// let str = 'W1eBb4rBain7';

// let upper = str.match(/[A-Z]/g);
// let toString = upper.join("");

// console.log(toString);

// let upper = str.match(/[A-Z]/g); => katta xarflarni ajratish
// let lower = str.match(/[a-z]/g); => kichkina xarflarni ajratish
// let numbers = str.match(/[0-9]/g); => raqamlarni ajratish
// match() => string metodi hisoblanadi va array qaytaradi
// join("") => array metodi hisoblanadi, va string qaytaradi
// /[a-z]/g => bu xolatda 'g' xarfi global degan manoni beradi

////////////////////////////////////////////////////////////////////

// <<< number >>>>

// console.log(10 % 5);
// console.log(2 ** 4);
// console.log(25 ** (1/2));
// console.log(25 ** 0.5);

// ////////////////////////////////////////////////
// number methods

// let num = 100;

// let check = Number.isInteger(num); => son butun yoki butun emasligini tekshirib beradi
// let parsing = Number.parseInt(num); => sonni butun qismini olib, type ni numberga ugiradi
// let fixing = +num.toFixed(1); => sonni yaxlitlaydi, son qiymat oladi

let str = '1000';





