// create a sign up function
const onSignUp = function (event) {
// prevent sign in event default action
  event.preventDefault()
  //
  console.log('submited', event.target)
  const form = event.target

  const formData = getFormFields(form)
  api.index()
    .then(ui.onSignUpSucess)
    .catch(ui.onError)
}
