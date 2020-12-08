curl "https://github.com/motown21/game-project-client.com/sign-up" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": ""${EMAIL}"",
    "password": ""${PASSWORD}"",
  "password_confirmation": ""${PASSWORD}""
  }
}'
echo
