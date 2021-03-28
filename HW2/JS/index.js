//задача 1
var a = [2, 3, 5];
var b = [2, 3, 5];
var c = [2, 2, 3, 3, 5, 6]
var d = [1, 2, 3];
function compareArrays(arr1, arr2) {
    if (arr1.length != arr2.length) {
        console.log('not equal')
        return
    }
    const obj1 = {}
    const obj2 = {}
    for (let i = 0; i < arr1.length; i++) {
        obj1[arr1[i]] ? obj1[arr1[i]] +=1 : obj1[arr1[i]] = 1
    }
    for (let i = 0; i < arr2.length; i++) {
        obj2[arr2[i]] ? obj2[arr2[i]] +=1 : obj2[arr2[i]] = 1
    }
    for (let key in obj1) {
        if (obj1[key] != obj2[key]) {
            console.log('not equal')
            return
        }
    }
    console.log('equal')
}
compareArrays(a, b);
compareArrays(c, d);
//задача 2
const uniqueValues = {arr1: [], arr2: []}
const arr1 = [55,77,66];
const arr2 = [55,11,15,77,66,99,100,110];
 
arr1.forEach(item1 => {
    !arr2.includes(item1) && !uniqueValues.arr1.includes(item1) && uniqueValues.arr1.push(item1)
    arr2.forEach(item2 => {
        !arr1.includes(item2) && !uniqueValues.arr2.includes(item2) && uniqueValues.arr2.push(item2)
    })
})
 
console.log(uniqueValues)

arr1.forEach(item1 => {
    !arr2.includes(item1) && uniqueValues.arr1.push(item1)
    arr2.forEach(item2 => {
        !arr1.includes(item2) && !uniqueValues.arr2.includes(item2) && uniqueValues.arr2.push(item2)
    })
})
//второе решение
const uniqueReduce = arr1.reduce((result, item1) => {
    !arr2.includes(item1) && result.arr1.push(item1)
    for (let i = 0; i < arr2.length; i++) {
        !arr1.includes(arr2[i]) && !result.arr2.includes(arr2[i]) && result.arr2.push(arr2[i])
    }
    return result
}, {arr1: [], arr2: []} )
console.log(uniqueValues, uniqueReduce)


//задача 3

let string = "lorem";
alert(string);

function upperCase(str) {
    if (!str) return str;

    return str[0].toUpperCase() + str.slice(1);
}

alert(upperCase(string));



const string = "lorem";
function stringModify(str) {
    const stringArray = str.split("");
    stringArray[0] = stringArray[0].toUpperCase();
    return stringArray.join('');
}
alert( stringModify(string) );


//задача 4
const reverse = [...string].reduce((prev, next) => next + prev)

alert(reverse);
//задача 5 
let number = Math.sqrt(587);
let object = {

};

object.floor = Math.floor(number);
object.ceil = Math.ceil(number);
alert(object.floor + " " + object.ceil);

//задача 6
let numbers = [4, -2, 5, 19, -130, 0, 10];
let min = Math.min.apply(null, numbers);
let max = Math.max.apply(null, numbers);
alert(`Наименьшее число: ${min}, а наибольшее ${max}`)
//задача 7
const arr = []
const sum = arr.reduce((res, item) => res+= item, 0)
const squared = arr.map(item => item**2)
const filtered = arr.filter(item => !item % 2)
const sorted = arr.sort((a,b) => Math.ceil(Math.sqrt(a)) - Math.ceil(Math.sqrt(b)) )
//задача 8
let lang = {
    js: ['jQuery', 'Angular'], 
    php: 'hello',
    css: 'world',
}
alert(lang.js[0])

//задача 9

let days = [
    {en:["Monday","Tuesday", "Wednesday","Thursday","Friday","Saturday","Sunday",]},
    {ru:["Понедельник","Вторник", "Среда","Четверг"," Пятница","Суббота","Воскресенье",]}
]
alert(days[0].en[2]);
alert(days[1].ru[0]);