function rotateArray(arr, k) {
    const n = arr.length;
    k = k % n; // Handle cases where k is greater than the length of the array
  
    // Create a new array to store the rotated values
    const rotatedArray = [];
  
    // Copy the elements from the rotated position to the end of the original array
    for (let i = n - k; i < n; i++) {
      rotatedArray.push(arr[i]);
    }
  
    // Copy the elements from the beginning to the rotated position of the original array
    for (let i = 0; i < n - k; i++) {
      rotatedArray.push(arr[i]);
    }
  
    return rotatedArray;
  }
  
  const originalArray = [1, 2, 3, 4, 5];
  const k = 1; // Rotate by 1 position to the right
  const rotatedArray = rotateArray(originalArray, k);
  
  console.log(rotatedArray); // Output: [5, 1, 2, 3, 4]
  