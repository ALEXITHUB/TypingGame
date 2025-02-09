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