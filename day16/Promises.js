// Simulated function to fetch data from a remote server
function fetchDataFromServer() {
    // This function returns a Promise
    return new Promise((resolve, reject) => {
      // Simulate an asynchronous operation (e.g., a network request)
      setTimeout(() => {
        const data = { message: 'Data fetched successfully' };
  
        // Simulate a successful response
        const success = true;
  
        if (success) {
          resolve(data); // Resolve the Promise with the data
        } else {
          const error = new Error('Failed to fetch data');
          reject(error); // Reject the Promise with an error
        }
      }, 2000); // Simulate a 2-second delay
    });
  }
  
  // Using the fetchDataFromServer function with Promises
  fetchDataFromServer()
    .then((result) => {
      console.log(result.message); // Handle the resolved Promise
    })
    .catch((error) => {
      console.error(error.message); // Handle any errors that occurred
    });
  