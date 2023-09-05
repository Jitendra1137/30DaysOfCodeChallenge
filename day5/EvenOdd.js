const A1 = [1, 2, 5, 4, 0];
const B1 = [1, 2, 5, 4, 0];

function findEvenAndOdd(arr) {
  const evenNumbers = [];
  const oddNumbers = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenNumbers.push(arr[i]);
    } else {
      oddNumbers.push(arr[i]);
    }
  }

  return { evenNumbers, oddNumbers };
}

const resultA1 = findEvenAndOdd(A1);
const resultB1 = findEvenAndOdd(B1);

console.log("Test Case 1 - Even numbers in A1:", resultA1.evenNumbers);
console.log("Test Case 1 - Odd numbers in A1:", resultA1.oddNumbers);
console.log("Test Case 1 - Even numbers in B1:", resultB1.evenNumbers);
console.log("Test Case 1 - Odd numbers in B1:", resultB1.oddNumbers);


//  question no 2

const A2 = [1, 2, 3, 4, 0];
const B2 = [11, 22, 33, 44];

const resultA2 = findEvenAndOdd(A2);
const resultB2 = findEvenAndOdd(B2);

console.log("Test Case 2 - Even numbers in A2:", resultA2.evenNumbers);
console.log("Test Case 2 - Odd numbers in A2:", resultA2.oddNumbers);
console.log("Test Case 2 - Even numbers in B2:", resultB2.evenNumbers);
console.log("Test Case 2 - Odd numbers in B2:", resultB2.oddNumbers);
