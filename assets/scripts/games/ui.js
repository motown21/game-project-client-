'use strict'
// const store = require('./../store')

const newGameSuccess = function (response) {
  $('message').text('You started a New Game')

  $('#gameBoard').show()
}
const newGameFailure = function (error) {
  $('messsage').text('Game Failed' + error.responseJSON.message)
}

module.exports = {
  newGameSuccess,
  newGameFailure
}
