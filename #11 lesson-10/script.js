// hometask

// <<<< 1 >>>>>>

// let users = [
//     {id: 1, name: 'Jahongir'},
//     {id: 2, name: 'Abbosbek'},
//     {id: 3, name: 'Sardorbek'},
// ]

// const onSearch = (input) => {
//     let result = [];
//     for (let i = 0; i < users.length; i++){
//         if (users[i].name.toLowerCase().includes(input.toLowerCase())) {
//             result.push(users[i])
//         }
//     }
//     console.log(result);
// }

// onSearch('s');

//////////////////////////////////////////////////

// <<<< 2 >>>>>>

// let str = 'AABDBACC';

// let arr = [];

// for (let i = 0; i < str.length; i++){
    
//     // console.log(arr, str[i]);
//     // console.log(arr.includes(str[i]));
//     if (arr.includes(str[i])) {
//         console.log(str[i]); break
//     }
    
//     arr.push(str[i])
// }


// /////////////////////////////////////////////////////////////

// Array methods

// let arr = ['Jahongir', 'Abbosbek', 'Sardorbek'];

// arr.slice(0, 2); => 1-qiymt index, 2-qiymat length, malumotni copy qilib kesib oladi, asosiy array uzgarmaydi => Ctrl + C
// arr.splice(0, 2); => 1-qiymt index, 2-qiymat length, malumotni cut qilib kesib oladi, asosiy array uzgradi => Ctrl + X

// console.log(arr);

// console.log(arr.slice(0, 2));
// console.log(arr.splice(0, 2));

// =====================================

// console.log(arr.join("")); => stringga ugirish
// console.log(arr.concat('d')); => malumot qushish
// console.log(str.split("")); => str dan arrayga ugirish

// ===================================================================

// Array advanced methods

// <<<< sort() >>>>>

// let arr = [2, 8, 1, 4, 9, 3, 10, 111, 1000];

// console.log(arr.sort( (a, b) => a - b ) );
// console.log(arr.sort(function (a, b) {
//     return a - b
// }));

// let arr = ['c', 'b', 'a', 'B', 'C'];

// console.log(arr.sort( (birinchi, ikkinchi) => birinchi.localeCompare(ikkinchi)));
// console.log(arr.sort( (birinchi, ikkinchi) => ikkinchi.localeCompare(birinchi)));
// console.log(arr.sort(function (birinchi, ikkinchi) {
//     return birinchi.localeCompare(ikkinchi)
// }));

//====================================\

// let str = 'WBA';
// terminal => ABW

// console.log(str.split("").reverse().join(""));

//==================================

// let num = 213579;

// console.log(typeof +num.toString().split("").sort().join(""));

// ==============================================================

// <<<<< map() va forEach() >>>>>>

// let arr = ['Jahongir', 'Abbosbek', 'Sardorbek'];


// let checking = arr.map((value) => {
//     return 'WBA'
// })

// let checking = arr.forEach((value) => {
//     return 'WBA'
// })

// console.log(checking);

// arr.map((value, index, array) => {
    // console.log(value);
    // console.log(index);
    // console.log(array);
// })

// arr.forEach((value, index, array) => {
    // console.log(value);
    // console.log(index);
    // console.log(array);
// })


// map() => returnga qaytadi va malumot ustida amal bajara olamiz(update, delete ...);
// forEach() => returnga qaytmaydi va malumot ustida amal bajara olmaymiz!;

//////////////////////////////////////////////////////////

// <<<< filter() >>>>>


// let arr = [38, 23, 14, 25, 20, 55];

// let newArr = arr.filter((value) => value !== 25 );
// console.log(newArr);

// let newArr = [];
// arr.map((value) => {
//     if (value !== 25) {
//         newArr.push(value)
//     }
// })

// console.log(newArr);

// ========================================

// <<<< find() >>>


// let newArr = arr.find((value) => value === 'limon');
// let newArr = arr.fill(100);

// console.log(newArr);



let arr = [38, 23, 14, 25, 20, 55];

// Max => 55
// Min => 14



