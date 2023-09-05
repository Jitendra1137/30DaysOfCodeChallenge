const A = [0, 1, 12, 3, 4, 5];
const B = [5, 4, 3, 2, 1, 0];

A.sort((a, b) => a - b); // Sort A in ascending order
B.sort((a, b) => a - b); // Sort B in ascending order

console.log("A in ascending order:", A);
console.log("B in ascending order:", B);
