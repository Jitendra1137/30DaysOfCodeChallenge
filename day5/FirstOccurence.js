const key = 1;
const A = [0, 10, 2, 1, 4, 5];
const B = [5, 4, 3, 2, 1, 0];

// Using a loop
function findIndexOfKey(arr, key) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === key) {
      return i; // Return the index of the first occurrence of key
    }
  }
  return -1; // Return -1 if key is not found in the array
}

const indexOfKeyInA = findIndexOfKey(A, key);
const indexOfKeyInB = findIndexOfKey(B, key);

console.log("Index of key in A:", indexOfKeyInA);
console.log("Index of key in B:", indexOfKeyInB);

// Using indexOf() method
const indexOfKeyInA2 = A.indexOf(key);
const indexOfKeyInB2 = B.indexOf(key);

console.log("Index of key in A (using indexOf()):", indexOfKeyInA2);
console.log("Index of key in B (using indexOf()):", indexOfKeyInB2);
