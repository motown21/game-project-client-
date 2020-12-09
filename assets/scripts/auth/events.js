'use strict'
const api = require('./api')
const ui = require('./ui')
const getFormFields = require('./../../../lib/get-form-fields')

const onSignUp = function (event) {
  // Prevent the sign in page from refreshing
  event.preventDefault()

  // Get form data and use event.target as the form
  const form = event.target
  const formData = getFormFields(form)

  // create functions that to run when form data is sucessful or fails
  api.signUp(formData)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}
const onSignIn = function (event) {
  // Prevent the sign in page form refreshing
  event.preventDefault()

  // Get form data and use event.target as the form
  const form = event.target

  const formData = getFormFields(form)

  api.signIn(formData)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}
const onSignOut = function (event) {
  // Prevent the sign out page form refreshing
  event.preventDefault()

  // Get  form data and use event.target as the form
  const form = event.target

  const formData = getFormFields(form)

  api.signOut(formData)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}
const onChangePassword = function (event) {
  // Prevent the change password page form refreshing
  event.preventDefault()

  // Get form data and use event.target as the form
  const form = event.target

  const formData = getFormFields(form)

  api.changePassword(formData)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}
module.exports = {
  onSignUp: onSignUp,
  onSignIn: onSignIn,
  onSignOut: onSignOut,
  onChangePassword: onChangePassword
}
