// toutes les citations
const quotes = 
[
    'When you have eliminated the impossible, whatever remains, however improbable, must be the truth.',
    'There is nothing more deceptive than an obvious fact.',
    'I ought to know by this time that when a fact appears to be opposed to a long train of deductions it invariably proves to be capable of bearing some other interpretation.',
    'I never make exceptions. An exception disproves the rule.',
    'What one man can invent another can discover.',
    'Nothing clears up a case so much as stating it to another person.',
    'Education never ends, Watson. It is a series of lessons, with the greatest for the last.',
    'The game is afoot!',
    'To a great mind, nothing is little.',
    'It is a capital mistake to theorize before one has data.',
    'You see, but you do not observe.',
    'Mediocrity knows nothing higher than itself, but talent instantly recognizes genius.',
    'The world is full of obvious things which nobody by any chance ever observes.',
    'Crime is common. Logic is rare.',
    'There is nothing new under the sun. It has all been done before.',
    'The little things are infinitely the most important.',
    'It is not my intention to be fulsome, but I confess that I covet your skull.',
];
// stocker la liste de mots et l'index du mot que le joueur est en train de taper
let words = []; //let = variable disponible uniquement dans le bloc et après sa déclaration
let wordIndex = 0;
// l'heure de début
let startTime = Date.now();
// éléments de page
const quoteElement = document.getElementById('quote'); //Constantes 
const messageElement = document.getElementById('message');
const typedValueElement = document.getElementById('typed-value');

//Quand le joueur clique sur start le jeu débute
document.getElementById('start').addEventListener('click', () =>
{
    //Obtenir une citation aléatoire
    const quoteIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[quoteIndex];
    //Mettre la citation dans un tableau de mots 
    words = quote.split('');
    //Rénitialiser l'index des mots pour le suivi
    wordIndex = 0;

    //MàJ de l'interface
    // Crée un tableau d'éléments "span" afin que nous puissions définir une classe
    const spanWords = words.map(function(word) { return `<span>${word} </span>`});
    // Convertir en chaîne et définir comme innerHTML sur l'affichage de la citation
    quoteElement.innerHTML = spanWords.join('');
    // Met en surbrillance le premier mot
    quoteElement.childNodes[0].className = 'highlight';
    // Effacer tous les messages précédents
    messageElement.innerText = '';

    //Configuration de la zone de texte
    //Efface la zone de texte
    typedValueElement.value='';
    //défini le focus
    typedValueElement.focus();
    //lancement du chronomètre
    startTime = new Date().getTime();
});