function findDuplicate(arr) {
    const set = new Set();
  
    for (let i = 0; i < arr.length; i++) {
      if (set.has(arr[i])) {
        return arr[i];
      }
      set.add(arr[i]);
    }
  
    return -1; // Return -1 if no duplicates are found
  }
  
  const A = [0, 1, 2, 3, 4, 5];
  const B = [5, 4, 3, 2, 1, , 2,0];
  
  const duplicateA = findDuplicate(A);
  const duplicateB = findDuplicate(B);
  
  console.log("Duplicate in A:", duplicateA); // Output: Duplicate in A: -1 (no duplicates)
  console.log("Duplicate in B:", duplicateB); // Output: Duplicate in B: 0
  