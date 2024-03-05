// Hometask

// <<<< Math.sqrt() >>>>
// function mySqrt(son) {
//     return son ** 0.5
// }

// console.log(mySqrt(64));
// console.log(mySqrt(25));

//////////////

// <<<<< Math.abs()>>>>>

// function myAbs(son) {
//     son >= 0 && console.log(son);
//     son < 0 && console.log(son * (-1));
// }

// myAbs(-10);
// myAbs(10);

/////////////

// <<<<< Math.floor() >>>>>

// function myFloor(son) {
//     console.log(parseInt(son));
// }

// myFloor(222.10);

///////////////////////

// <<<<< Math.ceil() >>>>>>

// function myCeil(son) {
//     son > parseInt(son) && console.log(parseInt(son) + 1);
//     son === parseInt(son) && console.log(son);
// }

// myCeil(10.1);
// myCeil(10);

// ///////////////////

// <<<<< Math.round() >>>>>

// function myRound(son) {
//     son >= parseInt(son) + 0.5 && console.log(parseInt(son) + 1);
//     son < parseInt(son) + 0.5 && console.log(parseInt(son));
// }

// myRound(10.5);
// myRound(10.4);
// myRound(10);

///////////////////////////////////////////////////////////////////////////

// OBJECT
// Primitive vs Non-primitive

// <<<< syntax >>>>

// let user = {
//     name: 'Jahongir',   // name => key,  'Jahongir' => value
//     age: 20,            // age => key,   20 => value
// }

///////

// Accessing to object value

// <<<< 1 >>>>>

// console.log(student);
// console.log(student.name);
// console.log(student.age);

// <<<<< 2 >>>>>

// console.log(student['name']);
// console.log(student['age']);
// console.log(student['full-name']);
// console.log(student[100]);

// <<<< 3 - dynamic access >>>>>

// let student = {
//     name: 'Jahongir',
//     age: 20,
//     status: 'Student'
// }

// let key = 'status';

// console.log(student.key);
// console.log(student['key']);
// console.log(student[key]);

//////////////////////////////

// <<<< Obj update, delete, create >>>>>

// let student = {
//     name: 'Jahongir',
//     age: 20,
// }

// Object.freeze(student);  => obj ni muzlatib quyadi, update, create, delete ishlamaydi
// Object.seal(student);  => obj ni muzlatadi, update ishlaydi lekin create va delete ishlamaydi

// student.name = 'Abbosbek';
// student.status = 'Student';
// delete student.age;

// console.log(student);

// ////////////////////

// <<<<< object methods >>>>>>

// let student = {
//     name: 'Jahongir',
//     age: 20,
// }

// console.log(Object.keys(student));  => objectning key larini arrayga solib qaytaradi
// console.log(Object.values(student)); => objectning valuelarini arrayga solib qaytaradi
// console.log(Object.entries(student)); => objectning key-value larni alohida arrayga solib qaytaradi

// ///////////////////////////////////

// <<<<<< for in loop >>>>

// let student = {
//     name: 'Jahongir',
//     age: 20,
// }

// console.log('status' in student);  => in => special keyword, obj da malum key bor yuqligin tekshirib true yoki false qaytaradi

// for (let key in student) {
//     // console.log(key);  => keylarni qaytaradi
//     // console.log(student[key]); => valuelarni qaytaradi
// }

// primitive => qiymat call stack memoryda saqlanadi
// non-primitive => qiymat heap memory da saqlanadi, va call stackda usha heap memory dagi qiymatga bulgan unique reference(korsatkich, link) saqlanadi




//////////////////////////////////////////////

// taks

let schedule = {
    name: 'Abbosbek'
}

// true
// false