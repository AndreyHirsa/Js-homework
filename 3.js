//вернуть промежутки
const arr = [1, 3, 5, 2, 8, 9, 10, 12];

function getRange(arr) {
    return arr.reduce((acc, it, i) => {
         if (arr[i] < arr[i + 1]) {
            acc.push(`${arr[i]}-${arr[i + 1]}`);
            arr.splice(arr[i], 1);
        } else if (arr[i] > arr[i + 1]) {
            arr.splice(arr[i + 1], 1);
            acc.push(arr[i]);
        } else {
            acc.push(it);
        }
        return acc;
    }, [])
}

console.log(getRange(arr));

//не совсем понятно, не совсем понятно, по какому принципу нужно сделать промежутки, например почему в примере задания ['8-10',12], а не ['8-12']?


