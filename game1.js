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