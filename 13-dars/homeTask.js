let res = 0;

const findSum = (n) => {
    if (n === 1) {
        return res + 1;
    } else {
        res += n;
        return findSum(n - 1);
    }
}

console.log(findSum(4));

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<2>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


let person = {
    id: 1,
    name: 'Odil',
    age: 100,
    child: {
        id: 1,
        name: 'Ali',
        age: 50,
        child: {
            id: 1,
            name: 'Umar',
            age: 20
        }
    }
};

function sumNested(obj) {
    let sum = 0;
    for (let key in obj) {
        if (typeof obj[key] === 'object') {
            sum += sumNested(obj[key]);
        } else if (key === 'age') {
            sum += obj[key];
        }
    }
    return sum;
}

console.log(sumNested(person)); 


//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<3>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

let numbers = [1,1,2, 2, 3, 4,4, 5, 5,'a','a'];
let duplicates = [];

for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
        if (numbers[i] === numbers[j] && !duplicates.includes(numbers[i])) {
            duplicates.push(numbers[i]);
        }
    }
}

console.log(duplicates); 
