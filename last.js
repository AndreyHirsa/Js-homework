const arr = [1, [2, [3, 4, 'number', [5, 'string',6, 7, 8, 9]]]];


function toArr(arr) {
    for(let i of arr){
        if(Array.isArray(arr[i])){
            arr.splice(i,1,...arr[i])
        }
        else if(typeof(arr[i])==='string'){
            arr.splice(i,1)
            return toArr(arr);
        }
    }
    return arr
}

console.log(toArr(arr));


