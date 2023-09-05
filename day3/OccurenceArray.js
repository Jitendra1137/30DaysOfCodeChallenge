function countOccurrence(arr, key) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === key) {
        count++;
      }
    }
    return count;
  }
  
  // Array A
  const A = [1, 2, 3, 4, 0,1];
  const keyA = 1;
  const occurrenceA = countOccurrence(A, keyA);
  console.log(`The key ${keyA} occurs ${occurrenceA} times in array A`);
  
  // Array B
  const B = [5, 4, 3, 2, 1, 0];
  const keyB = 1;
  const occurrenceB = countOccurrence(B, keyB);
  console.log(`The key ${keyB} occurs ${occurrenceB} times in array B`);
  