const arr = [1, [2, [3, 4, 'number', [5, 'string', 6, 7, 8, 9]]]];


/* 1 вариант c splice
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
*/



//2

// получается не сильно читабельная конструкция,
// есть какой то более очевидный вариант с reduce? И нужно ли её переписать без фильтра?:)
function toArr(arr) {
   return arr.reduce((acc, it) => {
        return Array.isArray(it)?acc.concat(toArr(it)):acc.concat(it);
    }, []).filter(it=>typeof(it)==='number')
}


console.log(toArr(arr));