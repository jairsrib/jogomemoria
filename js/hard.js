const grid = document.querySelector('.grid');
const spanPlayer = document.querySelector('.player');
const timer = document.querySelector('.timer');

const characters = [
  'Ahri',
  'Akali',
  'Alistar',
  'Amumu',
  'Aphelios',
  'Ashe',
  'Ksante',
  'Mordekaiser',
  'Annie',
  'AurelionSol',
  'Azir',
  'Bard',
  'Blitzcrank',
  'Brand',
  'Diana',
  'DrMundo',
];

const createElement = (tag, className) => {
  const element = document.createElement(tag);
  element.className = className;
  return element;
}

let firstCard = '';
let secondCard = '';

const checkEndGame = () => {
  const disabledCards = document.querySelectorAll('.disabled-card');

  if (disabledCards.length === 32) {
    clearInterval(this.loop);
    alert(`Parabéns, ${spanPlayer.innerHTML}! Seu tempo foi de: ${timer.innerHTML}`);
    localStorage.setItem("time", timer.innerHTML);
    let tempo = parseInt(timer.innerHTML);
    const tempoRank = [tempo];

    const tempo1 = parseInt(localStorage.getItem("tempo1"));
    tempoRank.push(tempoD1);

    const tempo2 = parseInt(localStorage.getItem("tempo2"));
    tempoRank.push(tempoD2);

    const tempo3 = parseInt(localStorage.getItem("tempo3"));
    tempoRank.push(tempoD3);


    tempoRank.sort((a,b) => b.tempo - a.tempo);
    localStorage.setItem("tempoD1", tempoRank[0]);
    localStorage.setItem("tempoD2", tempoRank[1]);
    localStorage.setItem("tempoD3", tempoRank[2]);
    window.location.href = '../index.html';
    
  }

}

const checkCards = () => {
  const firstCharacter = firstCard.getAttribute('data-character');
  const secondCharacter = secondCard.getAttribute('data-character');

  if (firstCharacter === secondCharacter) {

    firstCard.firstChild.classList.add('disabled-card');
    secondCard.firstChild.classList.add('disabled-card');

    firstCard = '';
    secondCard = '';

    checkEndGame();

  } else {
    setTimeout(() => {

      firstCard.classList.remove('reveal-card');
      secondCard.classList.remove('reveal-card');

      firstCard = '';
      secondCard = '';

    }, 500);
  }

}

const revealCard = ({ target }) => {

  if (target.parentNode.className.includes('reveal-card')) {
    return;
  }

  if (firstCard === '') {

    target.parentNode.classList.add('reveal-card');
    firstCard = target.parentNode;

  } else if (secondCard === '') {

    target.parentNode.classList.add('reveal-card');
    secondCard = target.parentNode;

    checkCards();

  }
}

const createCard = (character) => {

  const card = createElement('div', 'card');
  const front = createElement('div', 'face front');
  const back = createElement('div', 'face back');

  front.style.backgroundImage = `url('../images/${character}.png')`;

  card.appendChild(front);
  card.appendChild(back);

  card.addEventListener('click', revealCard);
  card.setAttribute('data-character', character)

  return card;
}

const loadGame = () => {
  const duplicateCharacters = [...characters, ...characters];

  const shuffledArray = duplicateCharacters.sort(() => Math.random() - 0.5);

  shuffledArray.forEach((character) => {
    const card = createCard(character);
    grid.appendChild(card);
  });
}

const startTimer = () => {

  this.loop = setInterval(() => {
    const currentTime = +timer.innerHTML;
    timer.innerHTML = currentTime + 1;
  }, 1000);

}

window.onload = () => {
  spanPlayer.innerHTML = localStorage.getItem('player');
  startTimer();
  loadGame();
}