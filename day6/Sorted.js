function findSingleElement(arr) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
  
      if (mid % 2 === 0) {
        // If mid is even, compare with the next element
        if (arr[mid] === arr[mid + 1]) {
          left = mid + 2;
        } else {
          right = mid;
        }
      } else {
        // If mid is odd, compare with the previous element
        if (arr[mid] === arr[mid - 1]) {
          left = mid + 1;
        } else {
          right = mid;
        }
      }
    }
  
    return arr[left];
  }
  
  // Test case 1
  const arr1 = [1, 1, 1, 3, 3, 3, 0];
  const result1 = findSingleElement(arr1);
  console.log("Test case 1 result:", result1);
  
  // Test case 2
  const arr2 = [1, 2, 2, 2, 2, 2, 2];
  const result2 = findSingleElement(arr2);
  console.log("Test case 2 result:", result2);
  