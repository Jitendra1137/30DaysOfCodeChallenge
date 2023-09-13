function findMissingNumbers(arr) {
    const missingNumbers = [];
  
    // Create a Set of the input array for faster look-up
    const numberSet = new Set(arr);
  
    // Loop through numbers from 1 to 100
    for (let i = 1; i <= 100; i++) {
      // If the number is not in the input array, it's missing
      if (!numberSet.has(i)) {
        missingNumbers.push(i);
      }
    }
  
    return missingNumbers;
  }
  
  // Example usage:
  const inputArray = [1, 2, 3, 5, 6, 9, 10, 11, 12, 15, 16, 17]; // Replace with your input array
  const missingNumbers = findMissingNumbers(inputArray);
  console.log("Missing numbers: " + missingNumbers.join(", "));
  