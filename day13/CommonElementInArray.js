const A = [0, 1, 2, 3, 4, 5];
const B = [5, 4, 3, 2, 1, 0];

// Convert the arrays to sets
const setA = new Set(A);
const setB = new Set(B);

// Use the filter method to find common elements
const commonElements = [...setA].filter(element => setB.has(element));

console.log(commonElements); // [0, 1, 2, 3, 4, 5]
