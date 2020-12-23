//два максимальных числа
const numbers = [1, 3, 10, 10, 11, 11, 15, 4, 4, 5, 7, 6];

function maxNumbers(arr) {
    return arr.reduce((acc, it) => {
        if (!acc.includes(it)){
            acc.push(it);
        }
        return acc;
    }, []).sort((a, b) => a-b).slice(-2);
}

console.log(maxNumbers(numbers));