//задача 1
// var a = [2, 3, 5];
// var b = [2, 3, 5];
// var c = [2, 2, 3, 3, 5, 6]
// var d = [1, 2, 3];

// function isArrayEqual(array, array1) {
//     let counter = 0;
//     if (array.length === array1.length) {
//         for (let i = 0; i < array.length; i++) {
//             const element = array[i];
//             for (let j = 0; j < array1.length; j++) {
//                 const element1 = array1[j];
//                 if (element === element1) {
//                     console.log('найдено совпадение: ' + element1);
//                     counter++;
//                 }
//                 else {
//                     console.log('массивы не равны');
//                 }
//             }

//         }

//     }
//     if (counter === array.length && counter === array1.length) {
//         console.log('массивы равны');
//     }

//     else {
//         console.log('массивы не равны');
//     }
// }
// isArrayEqual(a, b);
// isArrayEqual(c, d);
//задача 2

//задача 3

let string = "lorem";
alert(string);
// string.charAt[0].toUppercase();
// console.log(string);

function upperCase(str) {
    if (!str) return str;

    return str[0].toUpperCase() + str.slice(1);
}

alert(upperCase(string));



// function stringModify(str) {
//     let stringArray = [];
//     stringArray = string.split("");
//     let char = stringArray.shift.toUpperCase;
//     stringArray = stringArray.unshift(char);
//     let newstring =""; 
//     newstrng = stringArray.join('');
//     return newstring;
// }
// alert( stringModify(string) );//не сработало

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