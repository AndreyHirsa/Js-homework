/*//1)
const numbers = [10, 25, 100, 'not a number'];
function sumResult(arr) {
    let newArray = arr.filter(i => typeof (i) === 'number');
    return newArray.reduce((sum, current) => sum + current);
}

const sum = numbers.reduce((acc, it) =>
    typeof (it) === 'number' ? acc + it : acc, 0
);
console.log(sum);


//2)
const users = [{name: 'Ivan', age: 18}, {name: 'Petr', age: 12}, {name: 'Sidor', age: 25}];

let adults = users.filter(i => i.age > 18);
let underage = users.filter(i => i.age < 18);
console.log(adults);
console.log(underage);


!//3
const data = [{firstName: 'Arthas', lastName: 'Menethil', age: 40}, {firstName: 'Andrey', lastName: 'Hirsa', age: 22},
    {firstName: 'Pavel', lastName: 'Pavlovich', age: 40}, {firstName: 'Ashton', lastName: 'Kutcher', age: 40},
    {firstName: 'Ivan', lastName: 'Ivanovich', age: 40}];


let userLastName = prompt('Enter user lastname', '').toLowerCase();

let newData = data.map(function (i) {
    i.lastName = i.lastName.toLowerCase();
    return i;
});

let userSearch = newData.find(function (i) {
    if(i.lastName===userLastName){
        return i;
    }
});

if(userSearch){
    alert(JSON.stringify(userSearch,null,' '));
}
else{
    alert('No results found for your request');
}


//4
const values = ['a', 'b', 'c', 'v', 'v', 'v'];

let countValues = values.reduce(function (acc, value) {
    if (acc[value]) {
        acc[value]++;
    } else {
        acc[value] = 1;
    }
    return acc;
}, {});


console.log(countValues)


//5
let arr = [10, 2, 33, 1, 33, 4, 9, 22, 10];

let arrSorted = arr.sort(function (a, b) {
    return a - b;
});

let arrNew = arrSorted.filter(function (item, index) {
    return arrSorted.indexOf(item) === index;
});


console.log(arrSorted);
console.log(arrNew);


//6
let word = 'дед'

function isPalindrom(word) {
    let result;
    for (let i = 0; i < word.length; i++) {
        if (word[i] === word[word.length - 1 - i]) {
            result = 'yes'
        } else {
            result = 'no'
        }
        return result;
    }
}

console.log(isPalindrom(word));*/


