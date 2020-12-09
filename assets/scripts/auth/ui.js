const store = require('./../store')

const signUpSuccess = function (response) {
  // creating a message that displays to the user they have sucessfully signed up
  $('#message').text('Signed Up Successfully!:)')
  // hide messaage when user is signed up
  $('.authenticated').hide()
  $('unauthenticated').show()
  // reset form
  $('form').trigger('rest')
}

const signUpFailure = function (error) {
  $('#message').text('Sign Up Failed :( with error: ' + error.message)
}

// creating a message that displays that the user has signed in successfully
const signInSuccess = function (response) {
  $('#message').text('Signed In Successfully! :)')
  store.user = response.user
  // Show messaage when user is signed in
  $('.authenticated').show()
  // Hide messge when user is signed in
  $('.unauthenticated').hide()
}

const signInFailure = function (error) {
  $('#message').text('Sign In Failed :( with error: ' + error.message)
}

const changePasswordSuccess = function (response) {
  $('message').text('Change password Successfully:)')
}
const changePasswordFailure = function (error) {
  $('message').text('Change password failed :( with error:' + error.message)
}
// creating a message that displays that the user has signed out successfully
const signOutSuccess = function () {
  $('message').text('Sign out Successful!:)')
  $('.authenticated').hide()
  $('.unauthenticated').show()
  store.user = null
  // reset form
  $('form').trigger('rest')
}

const signOutFailure = function (error) {
  $('message').text('Sign out Failed:' + error.responseJSON.message)
}

module.exports = {
  signUpSuccess: signUpSuccess,
  signUpFailure: signUpFailure,
  signInSuccess: signInSuccess,
  signInFailure: signInFailure,
  signOutSuccess: signOutSuccess,
  signOutFailure: signOutFailure,
  changePasswordSuccess: changePasswordSuccess,
  changePasswordFailure: changePasswordFailure
}
