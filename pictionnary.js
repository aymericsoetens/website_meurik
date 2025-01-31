// Récupérer les éléments du DOM
const canvas = document.getElementById('drawingCanvas');
const ctx = canvas.getContext('2d');
const clearCanvasButton = document.getElementById('clearCanvas');
const guessInput = document.getElementById('guessInput');
const submitGuessButton = document.getElementById('submitGuess');
const resultDiv = document.getElementById('result');

// Variables pour le dessin
let isDrawing = false;

// Démarrer le dessin
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);
});

// Dessiner
canvas.addEventListener('mousemove', (e) => {
    if (isDrawing) {
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
    }
});

// Arrêter le dessin
canvas.addEventListener('mouseup', () => {
    isDrawing = false;
    ctx.closePath();
});

// Effacer le canvas
clearCanvasButton.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

// Soumettre la devinette
submitGuessButton.addEventListener('click', () => {
    const guess = guessInput.value.trim();
    if (guess) {
        resultDiv.textContent = `Vous avez deviné : "${guess}"`;
        guessInput.value = ''; // Effacer le champ de saisie
    } else {
        resultDiv.textContent = "Veuillez entrer une devinette !";
    }
});

const words = ["Chat", "Maison", "Voiture", "Arbre", "Soleil", "Lune", "Étoile", "Fleur"];
const randomWord = words[Math.floor(Math.random() * words.length)];

// Afficher le mot à dessiner (pour le dessinateur)
resultDiv.textContent = `Dessinez : ${randomWord}`;