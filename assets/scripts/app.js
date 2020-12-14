'use strict'

// use require with a reference to bundle the file and use it in this file
const authEvents = require('./auth/events')
const gamesEvents = require('./games/events')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('.authenticated').hide()

  // create event listener for sign up
  $('#sign-up').on('submit', authEvents.onSignUp)
  // create event listener for sign in
  $('#sign-in').on('submit', authEvents.onSignIn)
  // create event listener changePassword
  $('#change-password').on('submit', authEvents.onChangePassword)
  // create event listener sign out
  $('#sign-out').on('click', authEvents.onSignOut)

  // create event listener for new game
  $('#create-game').on('click', gamesEvents.onCreateGame)
  $('#show-game').on('submit', gamesEvents.onShowGame)
  $('#delete-game').on('submit', gamesEvents.onDeleteGame)
  $('#update-game').on('submit', gamesEvents.onUpdateGame)
  $('#game-index').on('click', gamesEvents.onIndexGame)
  $('#game-board').on('click', gamesEvents.onGameBoard)
})
// create an object for tic tac toe game
const ticTacToe = {
  player1: 'x',
  player2: 'o',
  cells: ['', '', '', '', '', '', '', '', ''],
  gameOver: true,
  gameWinner: [
    [0, 1, 2],
    [3, 2, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
}
// Determin whos turn it is to play
const currentPlayer = function (player1, player2) {
  if (this.player1 === 'x') {
    return player1 + "it's x's turn"
  } else {
    return player2 + "it's o's turn"
  }
}
// check the board cells
const boardSelection = function (cells, dataCellIndex) {
  // const index = event.target.id
  // if (!cells[index]) {
  // cells[index] = currentPlayer
  // event.target.innerText = currentPlayer
  // }
  // calling all classes with name box
  // const boxes = Array.from(document.getElementClassName('box')
  $('.box').text('0')
  if (this.gameOver || ticTacToe.cells[dataCellIndex] !== '') {
    return 'this position is not open. Try again'
  }
}
// determine the winner of the game
const getWinner = function (gameOver, currentPlayer, cells) {
  if (currentPlayer === this.cells[0] && currentPlayer === this.cells[1] && currentPlayer === this.cells[2]) {
    return gameOver + 'Congradulations you WON!'
  } else if (currentPlayer === this.cells[3] && currentPlayer === this.cell[2] && currentPlayer === this.cells[5]) {
    return gameOver + 'Congradulations you WON!'
  } else if (currentPlayer === this.cells[6] && currentPlayer === this.cell[7] && currentPlayer === this.cells[8]) {
    return gameOver + 'Congradulations you WON!'
  } else if (currentPlayer === this.cells[0] && currentPlayer === this.cell[3] && currentPlayer === this.cells[6]) {
    return gameOver + 'Congradulations you WON!'
  } else if (currentPlayer === this.cells[1] && currentPlayer === this.cell[4] && currentPlayer === this.cells[7]) {
    return gameOver + 'Congradulations you WON!'
  } else if (currentPlayer === this.cells[2] && currentPlayer === this.cell[5] && currentPlayer === this.cells[8]) {
    return gameOver + 'Congradulations you WON!'
  } else if (currentPlayer === this.cells[0] && currentPlayer === this.cell[4] && currentPlayer === this.cells[8]) {
    return gameOver + 'Congradulations you WON!'
  } else if (currentPlayer === this.cells[2] && currentPlayer === this.cell[4] && currentPlayer === this.cells[6]) {
    return gameOver + 'Congradulations you WON!'
  }
}

const drawGame = function () {

}
module.exports = {
  currentPlayer: currentPlayer,
  boardSelection: boardSelection,
  getWinner: getWinner,
  drawGame: drawGame
}
