curl "https://github.com/motown21/game-project-client.com/sign-in" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": ""${EMAIL}"",
      "password": ""${PASSWORD}""
    }
  }'
echo
