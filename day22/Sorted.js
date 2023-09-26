function isArraySorted(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        return false;
      }
    }
    return true;
  }
  
  const arr1 = [1, 2, 3, 4, 5];``
  const arr2 = [3, 14, 5, 6, 9];
  
  console.log(isArraySorted(arr1)); // Output: true
  console.log(isArraySorted(arr2)); // Output: true
  