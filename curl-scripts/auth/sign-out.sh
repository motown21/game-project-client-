curl "https://github.com/motown21/game-project-client.com/sign-out" \
  --include \
  --request DELETE \
  --header "Content-Type: application/json"\
  --header "Authorization: Bearer ${TOKEN}"

echo
