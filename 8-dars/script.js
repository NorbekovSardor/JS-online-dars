
// <<<<<< 1 >>>>>>>

// let schedule = {};

// function isEmpty(obj) {
    
//     for (let key in obj) {
//         return false
//     }
    
//     return true
    
// }

// console.log(isEmpty(schedule));

// /////////////////////////

// <<<<< 2 >>>>>

// let salaries = {
//     John: 100,
//     Ann: 200,
//     Pete: 300
// }

// let sum = 0;

// for (let key in salaries) {
//     // console.log(key);  /// Keys
//     // console.log(salaries[key]);  /// Values
//     sum += salaries[key]
// }

// console.log(sum);

////////////////////////////////

// <<<<< 3 >>>>>>>>>>>

// let menu = {
//     width: 200,
//     height: 200,
//     title: 'WBA'
// }

// const multiplyNumeric = (obj) => {
//     for (let key in obj) {
//         if (typeof obj[key] === 'number') {
//             obj[key] *= 2
//         }
//     }
// }

// console.log(menu);
// multiplyNumeric(menu);
// console.log(menu);

////////////////////////////////////////////////////

// Obj advanced

// comparing objectts

// let obj1 = { title: 'student' };
// let obj2 = { title: 'student' };

// console.log(obj1 == obj2);
// console.log(obj1 === obj2);

// let str1 = 'Wba';
// let str2 = 'Wba';

// console.log(str1 == str2);
// console.log(str1 === str2);

// let arr1 = [1, 2, 3];
// let arr2 = [1, 2, 3];

// console.log(arr1 == arr2);
// console.log(arr1 === arr2);

// Agar bizda bir xil qiymatli non-primitive data bolsa va biz ularni bir-biriga taqqoslasak, xar doim false qaytaradi, chunki non-primitive da value ni taqqoslamaydi balki call stack dagi reference ni bir biriga taqqoslaydi, zero reference xar doim unique;
// Agar bizda bir xil qiymatli primitive data bolsa, va biz ularni taqqoslasak, xar doim true qaytadi, chunki primitive xolatda faqatgina value larni bir-biriga taqqoslaydi

////////////////////////////////////////////////////////////////

// <<<<< copy by reference vs copy by value >>>>>>

// <<<< copy by value in primitives >>>>
// let a = 'Wba';
// let b = a;  // copy by value
// a = 'Webbrain';
// b = 'Academy'

// console.log(a);
// console.log(b);

//////////////////////////////////////////

// <<<<<< copy by reference in non-primitives >>>>>

// let a = {name: 'Jahongir'};
// let b = a;  // copy by reference
// a.status = 'Student';
// delete a.name

// console.log(a);
// console.log(b);

// ////////////////////////////////////////

// <<<<<< clone in object >>>>>

// let a = {
//     name: 'Jahongir'
// }

// let clone = Object.assign({}, a); // shallow clone(nested bulmagan) olib beradi
// let clone = structuredClone(a); // deep clone(nested bulgan) olib beradi
// clone.status = 'Student';

// console.log(a);
// console.log(clone);

// /////////////////////////////////////////////////////////////////

// <<<<< methods in object >>>>>>>


// let obj = {
//     name: 'Jahongir',
//     age: 20,
    
//     hobbies(title1, title2) {
//         console.log(`My hobiies are ${title1} and  ${title2}`);
//     }
    
// }

// obj.hobbies('Football', 'Volleyball');


// /////////////////////////////////////////////////////////////////

// let obj = {
//     name: 'Wba',
//     age: 30,
//     child: {
//         name: 'Wba',
//         age: 20,
//         child: {
//             age: 10
//         }
//     }
// }

// console.log(obj.child.child.age);


// terminal 60



    

// tasks

let obj = {
    name:'Sardor',
    surname:'Norbekov',
    age:22,
    sar:{
        name:"Farrux",
        age:24,
        child:{
            name:'Karim',
            age: 45
        }
    }
};
let num = 0
while(true){
    if(obj){
        num += obj.age
    }else{ 
        break
    }
    obj = obj.child || obj.sar
}

console.log(num); 
