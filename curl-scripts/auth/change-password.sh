curl "https://tic-tac-toe-api-development.herokuapp.com" \
  --include \
  --request PATCH \
  --header "Authorizatin: Bearer ${TOKEN}"
  --header "Content-Type: application/json" \
  --data '{
    "passwords": {
      "old": ""${OLDPW}"",
      "new": ""${NEWPW}''
    }
  }'
echo
