//Global variables
var game = new Game();
//QuerySelectors
var buttons = document.querySelectorAll('button');
var message = document.querySelector('h1');
var squeakenWins = document.querySelector('.p1-wins');
var floofintailWins = document.querySelector('.p2-wins');
//Event Listeners
window.addEventListener('load', addButtonListeners);
//Event Handlers & Functions
function addButtonListeners() {
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
      makeAMove()
    });
  }
};

function makeAMove() {
  for (var i = 0; i < buttons.length; i++) {
    if (game.turn === game.player1 && buttons[i].id === event.target.id) {
      buttons[i].innerHTML = '<img class="token"src="./assets/swords.png" id="x"></img>';
      buttons[i].classList.add('pointer-events');
    } else if (game.turn === game.player2 && buttons[i].id === event.target.id) {
      buttons[i].innerHTML = '<img class="token"src="./assets/shield.png" id="o"></img>';
      buttons[i].classList.add('pointer-events');
    }
  }
  game.generateValue();
  game.checkForWinner();
  declareWinner();
  game.player1.saveWinsToStorage();
  game.player2.saveWinsToStorage();
  displaySavedWins();
  changeMessage();
  game.toggleTurn();
};

//Helper Functions
function changeMessage() {
  if (game.turn === game.player1 && !game.player1.isWinner) {
    message.innerText = `It's ${game.player1.id}'s Turn'`
  } else if (game.turn === game.player2 && !game.player2.isWinner) {
    message.innerText = `It's ${game.player2.id}'s Turn'`
  }
};

function declareWinner() {
  if (game.player1.isWinner) {
    message.innerText = `I dub thee, ${game.player1.id}, champion of the Squirrel Battles!`
  } else if (game.player2.isWinner) {
    message.innerText = `I dub thee, ${game.player2.id}, champion of the Squirrel Battles!`
  }
};

function displaySavedWins() {
  if (game.player1.isWinner) {
    game.player1.retrieveWinsFromStorage();
    squeakenWins.innerText = game.player1.wins;
  } else if (game.player2.isWinner) {
    game.player2.retrieveWinsFromStorage();
    floofintailWins.innerText = game.player2.wins;
  }
};

function disablePlay() {
  for(var i = 0; i < buttons.length; i++) {
    if (game.player1.isWinner || game.player2.isWinner) {
      buttons[i].classList.add('pointer-events')
    }
  }
};

function clearBoard() {
  for(var i = 0; i < buttons.length; i++) {
    buttons[i].innerHTML = "";
    buttons[i].classList.remove('pointer-events')
  }
  message.innerText = `It's ${game.player1.id}'s Turn'`
};
