function areArraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  
  return true;
}

const A = [0, 1, 2, 3, 4, 5];
const B = [5, 4, 3, 2, 1, 0];

if (areArraysEqual(A, B)) {
  console.log("B is a duplicate of A (with reversed order).");
} else {
  console.log("B is not a duplicate of A (with reversed order).");
}
