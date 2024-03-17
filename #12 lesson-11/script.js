// Hometask

// <<<< 1 >>>>>

// let arr = [25, 55, 71, 23, 91];

// console.log(arr.sort((a, b) => a - b).slice(-1));
// console.log(arr.sort((a, b) => b - a).slice(-1));
// console.log(arr.sort((a, b) => b - a)[0]);
// console.log(arr.sort((a, b) => a - b)[0]);

/////////////////////////////////////////////////

// <<<<<< 2 >>>>>>>>

// let cars = [
//     { id: 1, year: 1998, engine: 1, name: 'Tico'},
//     { id: 2, year: 2005, engine: 1.2, name: 'Matiz'},
//     { id: 3, year: 2010, engine: 1.6, name: 'Gentra'},
//     { id: 4, year: 2010, engine: 1.5, name: 'Cobalt'},
//     { id: 5, year: 2012, engine: 2, name: 'Malibu'},
//     { id: 6, year: 2000, engine: 1.2, name: 'Damas'},
//     { id: 7, year: 2018, engine: 2.4, name: 'Tracker'}
// ];

// let filtering = cars.filter((value) => value.year > 2010);
// let sorting = cars.sort((a, b) => a.engine - b.engine);
// let sorting = cars.sort((a, b) => a.year - b.year);
// let sorting = cars.sort((a, b) => a.name.localeCompare(b.name));
// let filtering = cars.filter((value) => value.year >= 2000 && value.year <= 2010);
// let updating = filtering.map((value) => {
//     return {...value,  status: 'Orta'}
// })

// console.log(updating);

//////////////////////////////////////////////////////////

// let cars = [
//     { id: 1, year: 1998, engine: 1, name: 'Tico'},
//     { id: 2, year: 2005, engine: 1.2, name: 'Matiz'},
//     { id: 3, year: 2010, engine: 1.6, name: 'Gentra'},
//     { id: 4, year: 2010, engine: 1.5, name: 'Cobalt'},
//     { id: 5, year: 2012, engine: 2, name: 'Malibu'},
//     { id: 6, year: 2000, engine: 1.2, name: 'Damas'},
//     { id: 7, year: 2018, engine: 2.4, name: 'Tracker'}
// ];

// <<<<< findIndex >>>>>>

// let arr = ['nok', 'anor', 'olma'];

// let find_Index = arr.findIndex((value) => value === 'anor');
// console.log(find_Index);

// <<<<<< some => || >>>>>

// let arr = [10, 31, 15, 24, 61];
// let check = arr.some((n) => n < 11);

// console.log(check);

// <<<<< every => && >>>>>>

// let arr = [10, 31, 15, 24, 61];
// let check = arr.every((n) => n < 62);
// console.log(check);

// <<<<<< reduce >>>>>

// let num = '5645';

// let arr = num.split("");
// let result = arr.reduce((initial, total) => initial + +total, 0);
// console.log(result);

// ==================

// let arr = [10, 20, 30, 40];

// let result = arr.reduce((a, b) => a + b, 0);
// console.log(result);

//////////////////////////////////////////

// let result = 0;

// for (let i = 0; i < num.length; i++){
//     // console.log(num[i]);
//     result += +num[i]
// }

// console.log(result);

// ==============================

// <<<< flat >>>>>>>

// let arr = [5, [5, [5]], [5, [5, [5]]]];
// let flatted = arr.flat(Infinity).reduce((a, b) => a + b, 0);

// console.log(flatted);

// =====================================================

// <<<<< spread in array >>>>>

// let arr = [20, 10, 5];

// let copy = [...arr].reduce((a, b) => a + b , 0)
// console.log(copy);

// =====================================================

// <<<<< destructure >>>>>>

// let arr = [100, 200, 200, 400];

// let [bir, ikki, uch, turt] = arr;

// console.log(turt);

// ======================================================

// let cars = [
//     { id: 1, year: 1998, engine: 1, name: 'Tico'},
//     { id: 2, year: 2005, engine: 1.2, name: 'Matiz'},
//     { id: 3, year: 2010, engine: 1.6, name: 'Gentra'},
//     { id: 4, year: 2010, engine: 1.5, name: 'Cobalt'},
//     { id: 5, year: 2012, engine: 2, name: 'Malibu'},
//     { id: 6, year: 2000, engine: 1.2, name: 'Damas'},
//     { id: 7, year: 2018, engine: 2.4, name: 'Tracker'}
// ];

// cars.map(({id, year, engine, name}) => {
//     // console.log(name);
//     // console.log(year);
//     console.log(id);
// });

// ================================================

// CRUD => CREATE, READ, UPDATE, DELETE

// let cars = [
//     { id: 1, year: 1998, engine: 1, name: 'Tico'},
//     { id: 2, year: 2005, engine: 1.2, name: 'Matiz'},
//     { id: 3, year: 2010, engine: 1.6, name: 'Gentra'},
//     { id: 4, year: 2010, engine: 1.5, name: 'Cobalt'},
//     { id: 5, year: 2012, engine: 2, name: 'Malibu'},
//     { id: 6, year: 2000, engine: 1.2, name: 'Damas'},
//     { id: 7, year: 2018, engine: 2.4, name: 'Tracker'}
// ];

// const onDelete = (id) => {
    
// }

// onDelete(7);

// ==========================

// const onUpdate = (car) => {
    
// }

// onUpdate({});

// ==========================

// const onRead = () => {
    
// }

// onRead();

// ==========================

// const onCreate = (car) => {
    
// }

// onCreate({});

















