function handleSubmit(event) {
  event.preventDefault();

  const inputValue = document.getElementById('sentence').value;
  const inputLength = inputValue.length;

  Client.checkForSentence(inputValue, inputLength);
}

export { handleSubmit };
