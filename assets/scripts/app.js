'use strict'

// use require with a reference to bundle the file and use it in this file
const authEvents = require('./auth/events')
const gamesEvents = require('./games/events')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('.authenticated').hide()
  // $('.unauthenticated').show()

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
const ticTacToe = {
  player1: 'x',
  player2: 'o',
  cells: ['', '', '', '', '', '', '', '', ''],
  gameOver: false,
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
const boardSelection = function (index) {
  if (ticTacToe.gameOver || ticTacToe.cells[index] !== '') {
    return 'this position is not open. Try again'
  }
}
module.exports = {
  boardSelection: boardSelection
}
