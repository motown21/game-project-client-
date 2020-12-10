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
  $('#new-game').on('click', gamesEvents.onNewGame)
})
