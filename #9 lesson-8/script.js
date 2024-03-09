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
