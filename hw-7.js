// Задание 1
function min(a, b) {
    if (a < b) {
        return a;
    }
    else {
        return b;
    }
}
let result3 = min(8, 4);
let double = min(6, 6);
console.log(result);
console.log(double);


// Задание 2
const oddEven = (num) => num % 2 === 0;

let number = 7;

if (oddEven(number)) {
    console.log(`Число четное`);
} else {
    console.log(`Число нечетное`);
}
// Задание 3
const square = (s) => s * s;
console.log(square(10));


// Задание 4

let question = prompt('Сколько вам лет?');
let year = Number(question);
if (question <= 0) {
    alert('Вы ввели неправильное значение')

} else {
    if (question <= 12) {
        alert('Привет, друг!')

    } else {
        alert('Добро пожаловать!')

    }

}
// Задание 5
function checkNumbers(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        return 'Одно или оба значения не являются числом';
    } else {
        return num1 * num2;
    }
}
const result = checkNumbers('z', 2);
const result1 = checkNumbers(5, 2);

console.log(result);
console.log(result1);


// Задание 6
function cubeNumber() {
    const input = prompt('Введите число:');
    const number = parseFloat(input);

    if (isNaN(number)) {
        return 'Переданный параметр не является числом';
    } else {
        const cube = number ** 3;
        return `n в кубе равняется ${cube}`;
    }
}

// Проверка работы функции с числами от 0 до 10
for (let i = 0; i <= 10; i++) {
    console.log(cubeNumber(i));
}

// Задание 7
const circle1 = {
    radius: 6,
    getArea: function () {
        return Math.PI * this.radius ** 2;
    },
    getPerimeter: function () {
        return 2 * Math.PI * this.radius;
    }
};

const circle2 = {
    radius: 4,
    getArea: function () {
        return Math.PI * this.radius ** 2;
    },
    getPerimeter: function () {
        return 2 * Math.PI * this.radius;
    }
};

