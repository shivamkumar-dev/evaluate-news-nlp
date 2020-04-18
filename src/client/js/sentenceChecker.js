function checkForSentence(value, length) {
  if (length > 0 && length < 281) {
    postData('http://localhost:8081/add', { sentence: value }).then(() => {
      getData('http://localhost:8081/sentiment').then((data) => {
        document.getElementById('results').innerHTML = `
            <p>Polarity: ${data.polarity}<p>
            <p>Subjectivity: ${data.subjectivity}<p>
            <p>Polarity confidence: ${Math.round(
              data.polarity_confidence * 100
            )}%<p>
            <p>Subjectivity confidence: ${Math.round(
              data.subjectivity_confidence * 100
            )}%<p>
          `;
      });
    });
  } else {
    alert('Please enter a sentence up to 280 characters!');
  }
}

const postData = async (url = '', data = {}) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  try {
    const newData = await response.json();
  } catch (error) {
    console.log('Error: ', error);
  }
};

const getData = async (url) => {
  const response = await fetch(url);

  try {
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Error: ', error);
  }
};

export { checkForSentence };
