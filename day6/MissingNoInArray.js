function findMissingNumbers(arrA, arrB) {
    const missingNumbers = [];
  
    // Create a Set of the elements in arrB for faster lookup
    const setB = new Set(arrB);
  
    // Loop through elements in arrA and check if they are in arrB
    for (const num of arrA) {
      if (!setB.has(num)) {
        missingNumbers.push(num);
      }
    }
  
    return missingNumbers;
  }
  
  const A = [0, 1, 2, 6, 4, 5];
  const B = [5, 4, 3, 2, 9, 0];
  
  const missingNumbersInA = findMissingNumbers(A, B);
  const missingNumbersInB = findMissingNumbers(B, A);
  
  console.log("Missing numbers in A:", missingNumbersInA);
  console.log("Missing numbers in B:", missingNumbersInB);
  