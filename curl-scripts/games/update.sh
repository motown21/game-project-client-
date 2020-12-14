url --include --request PATCH "https://tic-tac-toe-api-development.herokuapp.com/games/${ID}" \
  --header "Authorization: Bearer ${TOKEN}" \
  --header "Content-type: application/json" \
  --data '{
    "games": {
      "cell": {
      "text": "'${TEXT}'",
      "index": "'"${INDEX}"'",
      "value": "'"${VALUE}"'"
    },
      "over": "'"${OVER}"'"
    }
  }'
echo
