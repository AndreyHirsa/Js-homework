//4
//не доделал, получилось только возвратить объект с ключами, как дальше группировать так и не додумался

const data = [
    ['A', 'mon', '10'],
    ['A', 'mon', '10'],
    ['B', 'wed', '14'],
    ['C', 'mon', '13'],
    ['B', 'sut', '14'],
    ['D', 'mon', '11'],
    ['A', 'twu', '9'],
    ['C', 'mon', '10'],
    ['C', 'fri', '20'],
    ['D', 'mon', '32'],
    ['A', 'wed', '5']
];

function getSchedule(arr) {
    return arr.reduce((acc, it) => {
        acc[it[1]]=Object.assign({},)
        return acc
    }, {})
}

console.log(getSchedule(data))