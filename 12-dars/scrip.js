// CRUD

// let cars = [
//     { id: 1, year: 1998, engine: 1, name: 'Tico'},
//     { id: 2, year: 2005, engine: 1.2, name: 'Matiz'},
//     { id: 3, year: 2010, engine: 1.6, name: 'Gentra'},
//     { id: 4, year: 2010, engine: 1.5, name: 'Cobalt'},
// ];

// CRUD => CREATE, READ, UPDATE, DELETE

// const onUpdate = (car) => {
    // let updated = cars.map((value) => value);  // 1
    // let updated = cars.map((value) => value.id === car.id ? 'update' : 'not update'); // 2
    // let updated = cars.map((value) => value.id === car.id ? {...value, name: 'Cherry'} : value);  // 3
    // let updated = cars.map((value) => value.id === car.id ? {...value, [car.key] : car.value} : value);  // 4
    
    // console.log(updated);
// }

// onUpdate({ id: 2, key: 'id', value: '2024' });

// ======================================================

// const onDelete = (ids) => {
//     let filtered = cars.filter(({id}) => id !== ids);
//     console.log(filtered);
// }

// onDelete(3);

// ==============================================

// const onRead = () => {
//     cars.forEach(({id, year, engine, name}) => {
//         console.log(`id: ${id} year: ${year} engine: ${engine} name: ${name}`);
//     })
// }

// onRead();

// ====================================================

// const onCreate = (car) => {
    // cars.push(car);
    // console.log([...cars, {id: cars.length + 1, ...car }]);
// }

// onCreate({ name: 'Cherry', year: 2024 });
// onCreate({ name: 'Jetour', year: 2023 });

//=====================================================

// call() / apply() / bind() => this ni boshqa objectga yunaltiradi

// let user1 = {
//     id: 1,
//     name: 'John',
    
//     sayHi(age, hobby) {
//         console.log(this.status, age, hobby);
//     }
// }

// let user2 = {
//     status: 'Mentor',
// }

// user1.sayHi.call(user2, 25, 'Volleyball');
// user1.sayHi.apply(user2, [25, 'Voleyball']);
// user1.sayHi.bind(user2, 25, 'Volleyball')();
// let user = user1.sayHi.bind(user2, 25, 'Volleyball');
// user();




