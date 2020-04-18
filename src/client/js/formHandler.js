function handleSubmit(event) {
  event.preventDefault();

  const inputValue = document.getElementById('sentence').value;
  const inputLength = inputValue.length;

  Client.checkForQuestion(inputValue, inputLength);
}

export { handleSubmit };
