const arr = [1, 2, [3, 4, [5, 6, 7, 8, 9]]];


function toArr(arr) {
    for(let i of arr){
        if(Array.isArray(arr[i])){
            arr.splice(i,1,...arr[i])
        }
    }
    return arr
}

console.log(toArr(arr));
