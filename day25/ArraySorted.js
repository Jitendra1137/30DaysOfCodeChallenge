function isSorted(arr) {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < arr[i - 1]) {
        return -1; // Array is not sorted
      }
    }
    return 1; // Array is sorted
  }
  
  const arr1 = [1, 2, 3, 4, 5];
  const arr2 = [2, 3, 4, 5, 1];
  
  const result1 = isSorted(arr1);
  const result2 = isSorted(arr2);
  
  console.log("Result for arr1:", result1); // Output: 1 (sorted)
  console.log("Result for arr2:", result2); // Output: -1 (not sorted)
  