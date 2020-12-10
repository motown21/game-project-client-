curl "https://tic-tac-toe-api-development.herokuapp.com/update"\
  --include \
  --request PATCH \
  --header "Authorization: Bearer ${TOKEN}" \
  --header "Content-type: application/json" \
  --data '{
    "games": {
      "space": {
      "text": "'${TEXT}'",
      "index": "'"${INDEX}"'",
      "value": "'"${VALUE}"'"
    },
      "over": "'"${OVER}"'"
    }
  }'
echo
