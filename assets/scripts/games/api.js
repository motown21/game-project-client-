'use strict'
const config = require('./../config')
const store = require('./../store')

const onNewGame = function () {
  return $.ajax({
    url: config.apiURL + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}
const onUpdateGame = function (dataCellIndex, player1, player2) {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      game: {
        cell: {
          index: dataCellIndex,
          value: player1 + player2
        }
      }
    }
  })
}
const onGamesPlayed = function (dataCellIndex, player1, player2) {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET',
    data: dataCellIndex + player1,
    headers: {
      Authorization: 'Bearer' + store.user.token
    }
  })
}

module.exports = {
  onNewGame: onNewGame,
  onUpdateGame: onUpdateGame,
  onGamesPlayed: onGamesPlayed
}
