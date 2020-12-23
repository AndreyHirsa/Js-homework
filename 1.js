//вернуть значение
const obj = {
    a: {
        b: {
            c: 'd'
        },
        e: 'f'
    }
};

function getProperty(obj,keys){
    return keys.split('.').reduce((acc,key)=>{
        return acc[key];
    }, obj);
}

console.log(getProperty(obj,'a.b.c'));