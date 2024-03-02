
// <<<<<< 1 >>>>>>>>

// let str = '  fozik   ';

// console.log(str.includes('l'));
// console.log(str.toLowerCase().endsWith('l'));
// console.log(str.trim().toLowerCase().endsWith('l'));
// console.log(str.trim().toLowerCase()[str.trim().length - 1] === 'l');
// let newStr = str.trim().toLowerCase();
// let result = newStr[newStr.length - 1] === 'l';

// console.log(result);


// ///////////////////////////////

// <<<<<<< 2 >>>>>>>>>>>>

// let str1 = 'Web';
// let str2 = 'Brain';
// let newStr = str1;
    
// str1 = str2;
// str2 = newStr;

// console.log(str1);
// console.log(str2);

////////////////////////////////////////////////

// <<<<<< 3 >>>>>>>

// let yil = 2025;

// yil % 4 === 0 && console.log('Kabisa yili');
// yil % 4 !== 0 && console.log('Kabisa yili emas');


///////////////////////////////////////////////////

// <<<<< 4 >>>>>>

// let str = 'Web Brain Web Web Web Web';

// console.log(str.replace(/Web/g, 'IT'));

////////////////////////////////////////////////////////////

// Math build in methods

// console.log(Math.pow(5, 2)); => darajaga oshiradi, 1-qiymat son, 2-qiymat daraja
// console.log(5 ** 2);
// console.log(Math.sqrt(64)); => ildiz ostidan chiqaradi
// console.log(64 ** 0.5);
// console.log(Math.cbrt(64)); => 3 daraja ildiz
// 4 * 4 * 4 = 64;
// console.log(Math.min(20, 10, 5)); => minimum sonni olib beradi
// console.log(Math.max(20, 10, 5)); => maximum sonni olib beradi
// console.log(Math.abs(-10)); => musbat son qaytaradi
// console.log(parseInt(Math.random() * 100)); => tasodify son qaytaradi
// console.log(Math.round(10.5)); => qodliq 5 va undan yuqori bolsa, 1 qushib butun son qaytaradi
// console.log(Math.floor(10.6)); => butun son qaytaradi
// console.log(Math.ceil(10.7)); => qoldiq qism bulsa, songa 1 qushib qaytardi

//////////////////////////////////////////////////////

// Function => code of block
// Declaration, Expression, Arrow

// <<<<<< Declaration function >>>>>>>

// function example() {
//     // console.log('WBA');
//     return 10 * 10
// }

// console.log(example());  // calling a function

////////////////////////////////////////

// <<<<< Expression function >>>>>>>>>

// let example = function () {
//     // console.log('WBA');
//     return 10 * 10
// }

// console.log(example()); // calling a function

//////////////////////////////////////

// <<<<<< Arrow function (ES6) >>>>>>>

// let example = () => {
//     return 10 * 10
// }

// console.log(example()); // calling a function



// !!! function nimani return qilsa ushanga teng!!!

// declaration function => hoisting buladi,
// expression function => hoisting bulmaydi
// arrow function => hoisting bulmaydi, agar gulli qavs yozmasak auto return qiladi

////////////////////////////////////////////////

// <<<<<< parametr va argument >>>>>>

// let example = (name = 'Sardorbek', age = 20, status = 'Developer') => {
//     console.log(`Name: ${name} Age: ${age} Status: ${status}`);
// }

// example('Jahongir');

// example('Sardorbek', 23, 'Developer');
// example('Abbosbek', 20, 'Engineer');


// ///////////////////////////////////////////////

// Hometask

// function myMathPow(son, daraja) {
//     return son ** daraja
// }

// console.log(myMathPow(5, 2));









