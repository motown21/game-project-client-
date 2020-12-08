'use strict'

// use require with a reference to bundle the file and use it in this file
const authEvents = require('./auth/events')
// console.log('authEvents', authEvents)
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // create event listiner
  $('#sign-up').on('submit', authEvents.onSignUp)

  // create event listiner
  $('#sign-in').on('submit', authEvents.onSignIn)
  // create event listiner
  $('#change-password').on('submit', authEvents.onChangePassword)
  // create event listiner
  $('#sign-out').on('click', authEvents.onSignOut)
})
