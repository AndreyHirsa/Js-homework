
//1)
const numbers = [10, 25, 100, 'not a number'];

function sumResult(arr) {
    let newArray = arr.filter(i => typeof (i) === 'number');
    return newArray.reduce((sum, current) => sum + current, 0);
}

console.log(sumResult(numbers));




//2)
const users = [{name: 'Ivan', age: 18}, {name: 'Petr', age: 12}, {name: 'Sidor', age: 25}];

let adults = users.filter(i => i.age > 18);
let underage = users.filter(i => i.age < 18);
console.log(adults);
console.log(underage);




//3
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
    for(let[key,value]of Object.entries(userSearch)){
        alert(`${key}:${value}`);
    }
}

else{
    alert('No results found for your request');
}




//4
const values=['a','b','c','v','v','v'];

let countValues=[];
for(let i in values){
    if (countValues[values[i]]!==undefined) {
        (countValues[values[i]]++)
    }
    else {
        (countValues[values[i]]=1)
    }
}

let countObj=Object.assign({},countValues);
console.log(countObj);

