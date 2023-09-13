function findMiddleElement(arr1, arr2) {
    // Merge the two arrays
    const mergedArray = [...arr1, ...arr2];
    
    // Sort the merged array
    mergedArray.sort((a, b) => a - b);
    
    // Find the middle element
    const middleIndex = Math.floor(mergedArray.length / 2);
    const middleElement = mergedArray[middleIndex];
    
    return middleElement;
  }
  
  // Test case
  const arr1 = [1, 2, 5, 4, 10];
  const arr2 = [1, 2, 3, 4, 5];
  const middle = findMiddleElement(arr1, arr2);
  console.log("Middle Element:", middle);
  