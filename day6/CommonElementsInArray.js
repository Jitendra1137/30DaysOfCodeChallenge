const arrayA = [0, 1, 2, 3, 4, 5];
const arrayB = [0, 5, 4, 3, 2, 1, 0];

// Convert the arrays to sets
const setA = new Set(arrayA);
const setB = new Set(arrayB);

// Find common elements by filtering
const commonElements = [...setA].filter(element => setB.has(element));

console.log(commonElements); // Output: [0, 1, 2, 3, 4, 5]
