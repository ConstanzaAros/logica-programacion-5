let secretNumber = Math.floor(Math.random() * 100) + 1;
let guesses = [];


const celebrationSound = new Audio('https://youtu.be/3a0pqvHnsGQ');

document.getElementById('guessInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        checkGuess();
    }
});

function checkGuess() {
    const userInput = document.getElementById('guessInput').value;
    const guess = Number(userInput);

    if (isNaN(guess) || guess < 1 || guess > 100) {
        document.getElementById('message').innerText = "Por favor, ingresa un número válido entre 1 y 100.";
        return;
    }

    guesses.push(guess);

    if (guess === secretNumber) {
        document.getElementById('message').innerText = `Felicidades, adivinaste el número secreto. Los números introducidos fueron: ${guesses.join(', ')}`;
        // Lanzar serpentinas
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
        // Reproducir sonido de celebración
        celebrationSound.play();
    } else {
        let hint = guess < secretNumber ? "mayor" : "menor";
        document.getElementById('message').innerText = `Ups, el número secreto es incorrecto. Intenta con un número ${hint}.`;
        document.getElementById('guessInput').value = ''; // Limpia el valor del input
    }
}