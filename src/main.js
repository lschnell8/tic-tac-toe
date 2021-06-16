//Global variables
var game = new Game();

//QuerySelectors
var buttons = document.querySelectorAll('button');
var message = document.querySelector('h1');
var squeakenWins = document.querySelector('.p1-wins');
var floofintailWins = document.querySelector('.p2-wins');

//Event Listeners
window.addEventListener('load', loadGame);

//Event Handlers & Functions
function loadGame() {
  displaySavedWins();
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
  game.player1.saveWinsToStorage();
  game.player2.saveWinsToStorage();
  displaySavedWins();
  game.toggleTurn();
  changeMessage();
  declareWinner();
};

//Helper Functions
function changeMessage() {
  if(game.turn === game.player1) {
    message.innerText = `It's ${game.player1.id}'s Turn`
  } else if(game.turn === game.player2) {
    message.innerText = `It's ${game.player2.id}'s Turn`
  }
};

function declareWinner() {
  if (game.player1.isWinner) {
    message.innerText = `I dub thee, ${game.player1.id}, champion of the Squirrel Battles!`
    game.resetGameData();
  } else if (game.player2.isWinner) {
    message.innerText = `I dub thee, ${game.player2.id}, champion of the Squirrel Battles!`
    game.resetGameData();
  } else if (game.totalPlays === 9 && !game.player1.isWinner && !game.player2.isWinner) {
    message.innerText = `Inconceivable! OFF WITH YOUR HEADS!`
    setTimeout(function() {
      game.resetGameData();
    }, 2000)
  }
};

function displaySavedWins() {
  game.player1.retrieveWinsFromStorage();
  squeakenWins.innerText = game.player1.wins;
  game.player2.retrieveWinsFromStorage();
  floofintailWins.innerText = game.player2.wins;
};

function disablePlay() {
  for (var i = 0; i < buttons.length; i++) {
    if (game.player1.isWinner || game.player2.isWinner || game.totalPlays === 9) {
      buttons[i].classList.add('pointer-events')
    }
  }
};

function clearBoard() {
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].innerHTML = "";
    buttons[i].classList.remove('pointer-events')
  }
  game.player1.isWinner = false;
  game.player2.isWinner = false;
  game.turn = game.player1;
  message.innerText = `It's ${game.player1.id}'s Turn`
};
