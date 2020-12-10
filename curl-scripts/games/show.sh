API="https://tic-tac-toe-api-development.herokuapp.com"
URL_PATH="/games"
curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request GET \
  --header "Content-Type: application/json"\
  --header "Authorization: Token token=${TOKEN}"
echo
