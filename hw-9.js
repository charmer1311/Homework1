// Задание 1
const word = 'js';
const newword = word.toUpperCase();
console.log(newword);

// Задание 2
const products = ['Хлеб Бородинский', 'Пшеничный хлеб', 'Батон хлебный'];
const search = 'хлеб';

products.forEach((product) => {
    if (product.toLowerCase().startsWith(search.toLowerCase())) {
        console.log(product);
    }
});


// Задание 3
let num = Math.floor(32.58884);
console.log(num);
let num1 = Math.ceil(32.58884);
console.log(num1);
let num2 = Math.round(32.58884);
console.log(num2);

// Задание 4
const numbers = [52, 53, 49, 77, 21, 32];
const minResult = Math.min(...numbers);
const maxResult = Math.max(...numbers);

console.log(minResult);
console.log(maxResult);


// Задание 5
const randomNumber = Math.floor((Math.random() * 10) + 1);
console.log(randomNumber);



// Задание 6
function getRandomInt(num3) {
    const length = Math.floor(num3 / 2);
    const arr = [];

    for (let i = 0; i < length; i++) {
        const randomNum3 = Math.floor(Math.random() * (num3 + 1));
        arr.push(randomNum3);
    }
    return arr;
}
console.log(getRandomInt(8));

// Задание 7
function getRandom(a, b) {

    return Math.floor(Math.random() * (b - a + 1)) + a;
}
console.log(getRandom(5, 1));

// Задание 8, 9
let currentDate = new Date();
console.log(currentDate);
let days73 = 73 * 24 * 60 * 60 * 1000;
let searchDate = currentDate - days73;
let daysAgo73 = new Date(searchDate);
console.log(daysAgo73);


// Задание 10
const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг",
    "Пятница", "Суббота"];
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
    "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
let myDate = new Date();

let fullDate = "Дата: " + myDate.getDate() + " " + months[myDate.getMonth()] + " " + myDate.getFullYear() + " - это " + days[myDate.getDay()]
    + "  " + "\nВремя: " + myDate.getHours() + " : " + myDate.getMinutes() + " : " + myDate.getSeconds();
console.log(fullDate);