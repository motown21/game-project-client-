curl "https://tic-tac-toe-api-development.herokuapp.com" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}"
echo
PATH
