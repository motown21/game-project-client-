'use strict'
const config = require('./../config')
const store = require('./../store')

const onSignUp = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/sign-up/',
    method: 'POST',
    data: formData
  })
}

const onSignIn = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/sign-in/',
    method: 'POST',
    data: formData
  })
}
const onSignOut = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/sign-out/',
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const onChangePassword = function (formData) {
  console.log(store.user)
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    data: formData,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  onSignUp: onSignUp,
  onSignIn: onSignIn,
  onSignOut: onSignOut,
  onChangePassword: onChangePassword
}
