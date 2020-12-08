curl "https://github.com/motown21/game-project-client.com/change-password" \
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
