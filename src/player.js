class Player {
  constructor(id) {
    this.id = id;
    this.wins = 0;
    this.isWinner = false;
  }
  incrementWins() {
    this.wins++;
    this.isWinner = true;
  }
  saveWinsToStorage() {
    localStorage.setItem(`${this.id} storedWins`, JSON.stringify(this.wins))
  }
  retrieveWinsFromStorage() {
    this.wins = JSON.parse(localStorage.getItem(`${this.id} storedWins`)) || 0;
  }
};
