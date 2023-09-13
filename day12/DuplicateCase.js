function findDuplicates(arr) {
    const numFrequency = {};
    const duplicates = [];
  
    for (const num of arr) {
      if (numFrequency[num] === undefined) {
        numFrequency[num] = 1;
      } else {
        numFrequency[num]++;
      }
    }
  
    for (const num in numFrequency) {
      if (numFrequency[num] > 1) {
        duplicates.push(parseInt(num));
      }
    }
  
    return duplicates;
  }
  
  // Test Case 1
  const arr1 = [1, 2, 5, 4, 0];
  const duplicates1 = findDuplicates(arr1);
  console.log("Test Case 1 Duplicates:", duplicates1);
  
  // Test Case 2
  const arr2 = [1, 2, 3, 4, 5];
  const duplicates2 = findDuplicates(arr2);
  console.log("Test Case 2 Duplicates:", duplicates2);
  