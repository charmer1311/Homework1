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



