async function fetchData() {
    try {
      // Fetch data from an API
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      
      // Check if the HTTP request was successful
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      // Parse the JSON response
      const data = await response.json();
      
      // Process the data (e.g., display it)
      console.log('Fetched data:', data);
      
      return data;
    } catch (error) {
      // Handle any errors that occurred during the fetch and processing
      console.error('Error fetching data:', error);
      throw error; // Optionally rethrow the error
    }
  }
  
  // Call the async function
  fetchData()
    .then((result) => {
      // Do something with the result if needed
      console.log('Data processing complete:', result);
    })
    .catch((error) => {
      // Handle errors that might have occurred in fetchData or the subsequent .then() block
      console.error('Error in fetchData or data processing:', error);
    });
  