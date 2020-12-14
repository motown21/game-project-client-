'use strict'
// const store = require('./../store')
// const user1 = 'X'
// const user2 = 'O'

const newGameSuccess = function (response) {
  $('message').text('You started a New Game')

  $('#gameBoard').show()
}
const newGameFailure = function (error) {
  $('messsage').text('Game Failed' + error.responseJSON.message)
}
// const playGame = function (reponse) {
// if (user1 === 'X') {
// const startGame
// $()
// }
// }

module.exports = {
  newGameSuccess,
  newGameFailure
  // playGame
}
