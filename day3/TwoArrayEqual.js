function areArraysEqual(arr1, arr2) {
    // Check if the arrays have the same length
    if (arr1.length !== arr2.length) {
      return false;
    }
  
    // Iterate through the arrays and compare elements
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false; // Elements are not equal
      }
    }
  
    return true; // All elements are equal
  }
  
  // Test case 1
  const A1 = [1, 2, 5, 4, 0];
  const B1 = [1, 2, 5, 4, 0];
  const result1 = areArraysEqual(A1, B1);
  console.log("Test Case 1 Result:", result1); // Should print true
  
  // Test case 2
  const A2 = [1, 2, 3, 4, 5];
  const B2 = [11, 22, 33, 44];
  const result2 = areArraysEqual(A2, B2);
  console.log("Test Case 2 Result:", result2); // Should print false
  