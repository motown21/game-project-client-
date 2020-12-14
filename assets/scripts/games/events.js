'use strict'
const api = require('./api')
const ui = require('./ui')
const getFormFields = require('./../../../lib/get-form-fields')

const onCreateGame = function (event) {
  // const data = event.target
  event.preventDefault()
  // create functions to run when sign up is sucessful or fails
  const form = event.target

  const formData = getFormFields(form)

  api.createGame(formData)
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

module.exports = {
  onCreateGame: onCreateGame
// onUpdateGame: onUpdateGame
}
