function arraysAreEqual(arr1, arr2) {
    // Check if the arrays have the same length
    if (arr1.length !== arr2.length) {
      return false;
    }
  
    // Sort and compare the elements of both arrays
    arr1.sort();
    arr2.sort();
  
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
  
    return true;
  }
  
  const array1 = [1, 2, 3];
  const array2 = [3, 2, 1];
  const array3 = [1, 2, 4];
  
  console.log(arraysAreEqual(array1, array2)); // true
  console.log(arraysAreEqual(array1, array3)); // false
  