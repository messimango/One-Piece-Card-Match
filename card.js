const gameArea = document.querySelector(".game-grid")

// shuffle cards

const cards = [
    {
        name: 'luffy',
        img: 'images/luffy.png',
    },
    {
        name: 'zoro',
        img: 'images/zoro.png',
    },
    {
        name: 'nami',
        img: 'images/nami.png',
    },
    {
        name: 'usopp',
        img: 'images/usopp.png',
    },
    {
        name: 'merry',
        img: 'images/merry.png',
    },
    {
        name: 'sanji',
        img: 'images/sanji.png',
    },
    {
        name: 'robin',
        img: 'images/robin.png',
    },
    {
        name: 'franky',
        img: 'images/franky.png',
    },
    {
        name: 'sunny',
        img: 'images/sunny.png',
    },
    {
        name: 'brook',
        img: 'images/brook.png',
    },
    {
        name: 'jinbe',
        img: 'images/jinbe.png',
    },
    {
        name: 'ace',
        img: 'images/ace.png',
    },
    {
        name: 'big',
        img: 'images/big.png',
    },
    {
        name: 'boa',
        img: 'images/boa.png',
    },
    {
        name: 'chopper',
        img: 'images/chopper.png',
    },
    {
        name: 'kaido',
        img: 'images/kaido.png',
    },
    {
        name: 'roger',
        img: 'images/roger.png',
    },
    {
        name: 'vivi',
        img: 'images/vivi.png',
    },
    {
        name: 'katakuri',
        img: 'images/katakuri.png',
    },
    {
        name: 'oden',
        img: 'images/oden.png',
    },
    {
        name: 'rayleigh',
        img: 'images/rayleigh.png',
    },
    {
        name: 'sabo',
        img: 'images/sabo.png',
    },
    {
        name: 'shanks',
        img: 'images/shanks.png',
    },
    {
        name: 'whitebeard',
        img: 'images/whitebeard.png',
    },
    {
        name: 'luffy',
        img: 'images/luffy.png',
    },
    {
        name: 'zoro',
        img: 'images/zoro.png',
    },
    {
        name: 'nami',
        img: 'images/nami.png',
    },
    {
        name: 'usopp',
        img: 'images/usopp.png',
    },
    {
        name: 'merry',
        img: 'images/merry.png',
    },
    {
        name: 'sanji',
        img: 'images/sanji.png',
    },
    {
        name: 'robin',
        img: 'images/robin.png',
    },
    {
        name: 'franky',
        img: 'images/franky.png',
    },
    {
        name: 'sunny',
        img: 'images/sunny.png',
    },
    {
        name: 'brook',
        img: 'images/brook.png',
    },
    {
        name: 'jinbe',
        img: 'images/jinbe.png',
    },
    {
        name: 'ace',
        img: 'images/ace.png',
    },
    {
        name: 'big',
        img: 'images/big.png',
    },
    {
        name: 'boa',
        img: 'images/boa.png',
    },
    {
        name: 'chopper',
        img: 'images/chopper.png',
    },
    {
        name: 'kaido',
        img: 'images/kaido.png',
    },
    {
        name: 'roger',
        img: 'images/roger.png',
    },
    {
        name: 'vivi',
        img: 'images/vivi.png',
    },
    {
        name: 'katakuri',
        img: 'images/katakuri.png',
    },
    {
        name: 'oden',
        img: 'images/oden.png',
    },
    {
        name: 'rayleigh',
        img: 'images/rayleigh.png',
    },
    {
        name: 'sabo',
        img: 'images/sabo.png',
    },
    {
        name: 'shanks',
        img: 'images/shanks.png',
    },
    {
        name: 'whitebeard',
        img: 'images/whitebeard.png',
    },
];


cards.sort(() => 0.5 - Math.random());




// make game board

function gameBoard () {
    for (let i = 0; i < cards.length; i++) {
        const cardImage = document.createElement('img');
        cardImage.setAttribute('src', 'images/card.gif');
        cardImage.setAttribute('data-key', i)
        gameArea.appendChild(cardImage)
        cardImage.addEventListener('click', pickCard)
    };
}


gameBoard();

// pick card
let cardMatches = [];
let cardsPicked = [];

function pickCard() {
    const cardId = this.getAttribute('data-key')    
    cardsPicked.push(cards[cardId].name)
    cardMatches.push(cardId)
    this.setAttribute('src', cards[cardId].img)
    if(cardsPicked.length === 2) {
        setTimeout(cardsMatch, 440)
    }
}

// cards match?
console.log(cards)

const cardsCollected = []

function cardsMatch () {
    const gridDisplay = document.querySelectorAll('.game-grid img')
    if (cardMatches[0] == cardMatches[1]) {
        gridDisplay[cardMatches[0]].setAttribute('src', './images/card.gif')
        gridDisplay[cardMatches[1]].setAttribute('src', './images/card.gif')
    }
    else if (cardsPicked[0] == cardsPicked[1]) {
           gridDisplay[cardMatches[0]].setAttribute('class', 'hidden')
           gridDisplay[cardMatches[1]].setAttribute('class', 'hidden')
           cardsCollected.push(cardsPicked)
           updateScore()     
    } else {
        gridDisplay[cardMatches[0]].setAttribute('src', './images/card.gif')
        gridDisplay[cardMatches[1]].setAttribute('src', './images/card.gif')

    }
    cardMatches = []
    cardsPicked = []

    // win check
    if (cardsCollected.length == cards.length / 2) {
        const winText = document.querySelector('.win-text') 
        winText.innerHTML = 'You Win! Click reset game to play again!!'
    }
}



// score
const scoreDisplay = document.querySelector('.result')

var x = 0


function updateScore () {
    x++;
    scoreDisplay.innerHTML = x;
}




