'use strict'
const api = require('./api')
const ui = require('./ui')

const onNewGame = function (event) {
  const data = event.target

  // create functions to run when sign up is sucessful or fails
  api.newGame(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}
module.exports = {
  onNewGame: onNewGame
}
