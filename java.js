
const apiKey = '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';

// Make a search request to the OpenAI API when the form is submitted
document.querySelector('form').addEventListener('submit', event => {
  event.preventDefault();
  const query = document.querySelector('#query').value;

  axios.get('https://api.openai.com/v1/search', {
    params: {
      query: query,
      model: 'davinci',
      api_key: apiKey
    }
  }).then(response => {
    // Display the results on the page
    const resultsContainer = document.querySelector('#results');

    // Clear any previous results
    resultsContainer.innerHTML = '';

    // Create a new element to contain the results
    const results = document.createElement('pre');
    results.innerHTML = JSON.stringify(response.data, null, 2);

      // Add the results to the page
resultsContainer.appendChild(results);
  }).catch(error => {
    console.log(error);
  });
});
