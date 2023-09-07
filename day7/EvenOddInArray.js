// Function to separate even and odd numbers from an array
function separateEvenOdd(arr) {
    const evenNumbers = [];
    const oddNumbers = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        evenNumbers.push(arr[i]); // Even number
      } else {
        oddNumbers.push(arr[i]); // Odd number
      }
    }
  
    return { evenNumbers, oddNumbers };
  }
  
  // Test cases
  const A = [1, 2, 5, 4, 0];
  const B = [1, 2, 5, 4, 0];
  
  const resultA = separateEvenOdd(A);
  const resultB = separateEvenOdd(B);
  
  console.log("Test Case 1:");
  console.log("Array A:", A);
  console.log("Even Numbers in A:", resultA.evenNumbers);
  console.log("Odd Numbers in A:", resultA.oddNumbers);
  
  console.log("Test Case 2:");
  console.log("Array B:", B);
  console.log("Even Numbers in B:", resultB.evenNumbers);
  console.log("Odd Numbers in B:", resultB.oddNumbers);
  