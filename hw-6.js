//Задание 1

let i = 0;
while (i < 2) {
    console.log("Привет");
    i++;
}

// Задание 2
let a = 0;
for (let a = 1; a <= 5; a++) {
    console.log(a);
}



// Задание 3
let b = 0;
while (b <= 22) {
    if (b >= 7) {
        console.log(b);
    }
    b++;
}

// Задание 4
const obj = {
    "Коля": '200',
    "Вася": '300',
    "Петя": '400'
}
for (let key in obj) {
    console.log(`${key} - ${obj[key]}`)
}

// Задание 5
let n = 1000;
num = 0;
while (n >= 50) {
    n /= 2;
    console.log(n);
    num++;
}
console.log(`Количество циклов: ${num}`)

// Задание 6
let date = 5;
let allDay = 31;

for (let i = date; i <= allDay; i += 7) {
    console.log(`Сегодня пятница, ${i}-е число. Необходимо подготовить отчет.`);

}

// Дополнительные задания
// Задание 1
let k = 100;
num = 0;
while (k >= 0) {
    k -= 7;
    console.log(k);
    num++
}
console.log(`Количество циклов - ${num}`);

// Задание 2
let months = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];
console.log(`1-й месяц ${months[0]}`);
console.log(`2-й месяц ${months[1]}`);
console.log(`3-й месяц ${months[2]}`);
console.log(`4-й месяц ${months[3]}`);
console.log(`5-й месяц ${months[4]}`);
console.log(`6-й месяц ${months[5]}`);
console.log(`7-й месяц ${months[6]}`);
console.log(`8-й месяц ${months[7]}`);
console.log(`9-й месяц ${months[8]}`);
console.log(`10-й месяц ${months[9]}`);
console.log(`11-й месяц ${months[10]}`);
console.log(`12-й месяц ${months[11]}`);

// Задание 3
const book = {
    avtor: 'Пушкин А.С.',
    yearOfPublication: '25.10.1852',
    genre: 'сказка'
}
for (let key in book) {
    console.log(`${key} - ${book[key]}`)
}


// Задание 4

const number = ['5', '27', '35', '44', '89', '2', '85', '61', '23', '77'];
let minimum = number[0];
for (const item of number) {
    if (item < minimum) {
        minimum = item;
    }
}
console.log(minimum)



