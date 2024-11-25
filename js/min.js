var h3 = document.getElementById('change1');
var h4 = document.getElementById('change2');

var h3Values = [
    'Be yourself; everyone else is already taken.',
    'A friend is someone who knows all about you and still loves.',
    'If you tell the truth, you dont have to remember anything.',
    'Be the change that you wish to see in the world..',
    'So many books, so little time.'
];

var h4Values = [
    'Elbert Hubbard',
    'Mark Twain',
    'Mahatma Gandhi',
    'Frank Zappa',
    'Oscar Wilde'
];

changeValues(0);

var currentNumber = 0, randomNumber = 0;

function quote() {
    while (currentNumber === randomNumber) {
        randomNumber = (Math.floor(Math.random() * 5));
    }
    changeValues(randomNumber);
    currentNumber = randomNumber;
}

function changeValues(index) {
    h3.innerHTML = h3Values[index];
    h4.innerHTML = h4Values[index];
}