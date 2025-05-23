// Задание 1
let number = [1, 5, 4, 10, 0, 3];
i = 0;
while (i < number.length) {
    if (number[i] === 10) {
        console.log('Найдено значение 10');
        break;
    }
    i++;
}
// Задание 2
let numbers = [1, 5, 4, 10, 0, 3];
for (a = 0; a < numbers.length; a++) {
    if (numbers[a] === 4) {
        console.log(a);
        break;
    }
}

// Задание 3
let array = [1, 3, 5, 10, 20];
array = array.join(' ');
console.log(array);


// Задание 4
let arr = [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1]
];
for (let arrIn of arr) {
    for (let element of arrIn) {
        console.log(element)
    }

}


// Задание 5
let two = [1, 1, 1];
two.push(2, 2, 2);
console.log(two);

// Задание 6
let arrSort = [9, 8, 7, 'a', 6, 5];
arrSort.sort();
const filteredLetter = arrSort.filter(letter => letter > 0);
console.log(filteredLetter);

// Задание 7
const guessNumber = [9, 8, 7, 6, 5];
const question = +prompt('Угадай число');

if (guessNumber.includes(question)) {
    alert('Угадал');
} else {
    alert('Не угадал');
}

// Задание 8
let letters = 'abcdef';
letters = letters.split('');
console.log(letters);
letters.reverse();
letters = letters.join('');
console.log(letters);

// Задание 9
const numberArr = [[1, 2, 3], [4, 5, 6]];
const newArray = [];
for (let i = 0; i < numberArr.length; i++) {
    newArray.push(...numberArr[i]);
}
console.log(newArray);

// Задание 10
const arb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let g = 0; g < arb.length; g++) {
    if (arb[g + 1]) {
        console.log(arb[g] + arb[g + 1]);

    }
}

// Задание 11
function square(n) {
    return n.map(item => item ** 2);
}
console.log(square([5, 6, 7,]));

// Задание 12
function getLength(j) {
    return j.map(item1 => item1.length);
}
console.log(getLength(['hi', 'apples']));

// Задание 13
function negativ(arr1) {
    return arr1.filter(item2 => item2 < 0);
}
console.log(negativ([1, 2, -6, 8, -9]))

// Задание 14
function randomNumber() {
    return Math.floor(Math.random() * 10);
}

const empty = [];
for (let l = 0; l < 10; l++) {
    empty.push(randomNumber());

}
console.log(empty);
const even = [];
for (let l = 0; l < empty.length; l++) {
    if (empty[l] % 2 == 0) {
        even.push(empty[l]);

    }

}
console.log(even);

// Задание 15
function randomNumber1() {
    return Math.floor(Math.random() * 10);
}

const empty1 = [];
for (let k = 0; k < 10; k++) {
    empty1.push(randomNumber1());

}
console.log(empty1);
console.log(empty1.reduce((a, b) => a + b) / empty1.length);

















