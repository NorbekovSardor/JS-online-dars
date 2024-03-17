// hometask

// let obj = {
//     name: 'WBA',
//     age: 30,
//     child: {
//         name: 'wba',
//         age: 20,
//         child: {
//             age: 10,
//             child: {
//                 age: 100
//             }
//         }
//     }
// }

// let sum = 0;

// while (true) {
    
//     if (obj) {
//         sum += obj.age
//     } else {
//         break
//     }
    
//     obj = obj.child
// }

// console.log(sum);

// ///////////////////////////////////////////////////////////

// methods in object

// let obj = {
//     name: 'Wba',
//     age: 5,
    
//     fullName () {
//         // console.log(`Hey ${this.name} ${this.age}`);
//         console.log(this);
        
//     }
// }

// obj.fullName();

// this => global xolatda kelganda, global window objectiga teng buladi
// this => biror object ichida kelganda, usha objectni uziga teng buladi
// Arrow functionda this keywordi, malum bir objectga emas balki, global window objectiga teng bulib qoladi

// /////////////////////////////////////////////////

// Spread operator in object

// let obj = {
//     name: 'WBA',
//     age: 5,
// }

// let update = {  ...obj,  name: "Webbrain Academy", };


// console.log( obj );
// console.log( update );

// Spread operator => Es6 da qushilgan, objectdan copy(clone) olib beradi, va joyida obj ga yangi malumot qushish va update qilish mumkin, Spread xolatida reference xar xil buladi

// Difference between Spread vs Object.assign vs structuredClone

//////////////////////////////////////////////////////

// Destructure(qayta strukturalash) in objects

// let movies = {
//     name: 'Simba',
//     title: 'Cartoon',
//     age: 10,
//     child: {
//         username: 'Nala',
//         status: 'Lion',
//         nested: {
//             nesting: '1000'
//         }
//     }
// }


// const {
//     name, title, age,
//     child: { username, status, nested: {nesting}},
    
// } = movies;

// console.log(nesting);

// // console.log(username);
// // console.log(status);
// // console.log(movies.child.status);

// // DRY => dont repeat yourself

///////////////////////////////////////////////////////////////////////

// Array

// let arr = [100, 'Salom', { name: 'Jahongir' }, [1, 2], undefined, null, 'WBAC'];
// let lastElement = arr[arr.length - 1];
// let lastLetter = lastElement[lastElement.length - 1];

// console.log(lastLetter);

////////////////////////////////////////////

// adding value and update

// let arr = [100];

// arr[1] = 'Salom';
// arr[0] = 200;

// console.log(Array.isArray(arr));

// Array.isArray(arr) => arrayni type ni tekshirib beradi

//////////////////////////////////////////////////////////////////

// Array basic methods

// let arr = ['a', 'b', 'c'];

// arr.push('d', 'e'); => array oxiridan malumot qushish
// arr.pop(); => array oxiridan bitta malumot uchirish
// arr.unshift(1, 2, 3); => array boshidan malumot qushadi
// arr.shift(); => array boshidan bitta malumot uchiradi

// console.log(arr.join("")); => arrayni stringga ugiradi
// console.log(arr.includes('a')); => malumot bor yuqligin tekshiradi
// console.log(arr.concat(arr2, [10000])); => malumot qushadi
// console.log(arr.reverse()); => teskari qiladi


// 2-task

// let str = "ABABACC"; => birinchi kelgan juftlikni toping!

// terminal => A