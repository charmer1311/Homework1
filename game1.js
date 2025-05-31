// Игра - 1  Угодай число
function game1() {
    const guessNumber = Math.floor(Math.random() * 100) + 1;
    while (true) {
        const input = Number(prompt('Попробуй угадать число от 1 до 100'));
        if (input === 0) {
            alert('Попробуй еще!');
            return;
        }
        if (input === guessNumber) {
            alert(`Верно! ${guessNumber}`);
            break;
        }
        else if (input < guessNumber) {
            alert('Число должно быть больше!');
        } else {
            alert('Число должно быть меньше')
        }
    }
}

// Игра - 2 Простая арифметика
function game2() {
    const operators = ['+', '-', '*', '/'];
    const operator = operators[Math.floor(Math.random() * operators.length)];
    let userAnswer = "";
    let a = Math.floor(Math.random() * 10) + 1;
    let b = Math.floor(Math.random() * 10) + 1;
    let result = "";

    switch (operator) {
        case '+':
            userAnswer = prompt(`Сложите ${a} и ${b}`);
            result = a + b;
            break;
        case '-':
            userAnswer = prompt(`Вычтите ${a} и ${b}`);
            result = a - b;
            break;
        case '*':
            userAnswer = prompt(`Умножение ${a} и ${b}`);
            result = a * b;
            break;
        case '/':
            userAnswer = prompt(`Разделите ${a} и ${b}`);
            result = a / b;
            break;

    }
    if (Number(userAnswer == result)) {
        alert("Верно");
    } else {
        alert("Неверно");
    }
}

// Игра - 3 Переверни текст

function game3() {
    let text = prompt('Введите текст');
    text = text.split('');
    text = text.reverse();
    text = text.join('');
    alert(text);
}

// Игра - 4 Викторина
function game4() {
    const quiz = [
        {
            question: "Какой цвет небо?",
            options: ["\n1. Красный", "\n2. Синий", "\n3. Зеленый"],
            correctAnswer: 2 // номер правильного ответа
        },
        {
            question: "Сколько дней в неделе?",
            options: ["\n1. Шесть", "\n2. Семь", "\n3. Восемь"],
            correctAnswer: 2
        },
        {
            question: "Сколько у человека пальцев на одной руке?",
            options: ["\n1. Четыре", "\n2. Пять", "\n3. Шесть"],
            correctAnswer: 2
        }
    ];
    let score = 0;
    for (let i = 0; i < quiz.length; i++) {
        let quizQuest = Number(prompt(`Ввидите правильный ответ ${quiz[i].question} ${quiz[i].options}`));
        if (quizQuest == quiz[i][`correctAnswer`]) {
            score++;
            alert('Верно');
        } else {
            alert('Неверно');
        }


    }
    alert(`Вы ответили верно на ${score} вопроса`);

}




