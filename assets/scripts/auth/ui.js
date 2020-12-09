const store = require('./../store')
// token unidentifed found someone else with same error.
const signUpSuccess = function (response) {
  // creating a message that tells the user they have sucessfully signed up
  $('#message').text('Signed Up Successfully!:)')
  $('.unathenticated').show()
  $('.unathenticated').hide()
}

const signUpFailure = function (error) {
  $('#message').text('Sign Up Failed :( with error: ' + error.message)
}

const signInSuccess = function (response) {
  $('#message').text('Signed In Successfully! :)')
  store.user = response.user
  $('.unauthenticated').hide()
}

const signInFailure = function (error) {
  $('#message').text('Sign In Failed :( with error: ' + error.message)
}
const signOutSuccess = function (response) {
  $('message').text('Sign out Successful!:)')
}
const signOutFailure = function (error) {
  $('message').text('Sign out Failed:' + error.responseJSON.message)
}
// store user
store.user = null

// Reset form:
$('form').trigger('reset')

module.exports = {
  signUpSuccess: signUpSuccess,
  signUpFailure: signUpFailure,
  signInSuccess: signInSuccess,
  signInFailure: signInFailure,
  signOutSuccess: signOutSuccess,
  signOutFailure: signOutFailure
}
