// <<<<<< 1 >>>>>>>>>

/* let str = 'WBAacademyaaa';  //
terminal => a - 3

let result = "";

for (let i = 0; i < str.length; i++){
 
    if (str[i] === 'a') {
        // result = result + str[i]
        result += str[i]
    }
 
}

 console.log('a-',result.length +'ta');
 */
/////////////////////////////////////////////////

// let str = 'WBAcaademy';  //

// let result = 0;

// for (let i = 0; i < str.length; i++){
    
//     if (str[i] === 'a') {
//         result++
//     }
    
// }

// console.log('a-',result);

/////////////////////////////////////////////////

// let str = 'WaBAcAaadeamy';  //

// let result = 0;

// for (let i = 0; i < str.length; i++){
    
//     if (str[i] === 'a' || str[i] === 'A') {
//         result++
//     }
    
// }

// console.log('a-',result);

////////////////////////////////////////////////////////////

// <<<<< 2 >>>>>

// let str = 'WBAACcademy';
// // terminal => WBAA

// let result = "";

// for (let i = 0; i < str.length; i++){
//     // console.log(str[i] === str[i].toUpperCase());
    
//     if (str[i] === str[i].toUpperCase()) {
//          result += str[i]
//     }
    
// }

// console.log(result);

// str[i] => xarflar
// i => raqam qaytardi

// ///////////////////////////////////////////////////////////////////

// for loop advanced

// break

// for (let i = 2; i <= 5; i++){
    
//     if (i === 2) {
//         break
//     }
    
//     console.log(i);
    
// }

/////////////////////////////////////////////////////

// continue

// for (let i = 0; i < 10; i++){
    
//     if (i % 2 === 0) {
//         continue
//     }
    
//     console.log(i);
    
// }


// //////////////////////////////////////////////////

// nested loop

// for (let i = 0; i <= 2; i++){
    
//     console.log('--Tashqi loop');
    
//     for (let j = 0; j <= 3; j++){
//         console.log("-----Ichki loop");
//     }
    
// }

// task

// 1 x 1 = 1
// 1 x 2 = 2
// 1 x 10 = 10;

// ==================

// 2 x 1 = 2;
// 2 x 10 = 20;

//==================

// 3 x 1 = 3;

// ==============

// 10 x 1 = 10;
// 10 x 10 = 100;

// ///////////////////////////

// curry table

// for (let i = 1; i <= 10; i++){
    
//     for (let j = 1; j <= 10; j++){
//         console.log(i + "x" + j + "=" + i * j );
//     }
    
//     console.log('================');
    
// }

/////////////////////////////////////////////////

/* let title = 'Webbrain';
let result = "";


for (let i = 0; i <= 10; i++){
     result += title
     if (i < 9) {
        result += " ";
      }
}

 console.log(result); */

// //////////////////////////////////////////////////////

// <<<<<< while >>>>>>

// let i = 1;

// while (i <= 10) {
//     console.log(i);
//     i++
// }

// <<<<<<< do while >>>>>

// let i = 1;

// do {
//     console.log(i);
//     i++
// } while (i <= 10);

// /////////////////////////

// <<< while vs do while >>>>>

// let i = 0;

// while (i > 1) {
//     console.log(i);
//     i++
// }

// do {
//     console.log(i);
//     i++
// } while(i > 1)


// while => birinchi shart tekshiradi, keyin kod yuradi
// do / while => birinchi kod yuradi keyin shart tekshiradi, shuni hisobiga birinchi shart false bulib turgan bulsa xam, kod bir marta yurib beradi
