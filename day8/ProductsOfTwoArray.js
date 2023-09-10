// Define the two arrays
const A = [0, 1, 2, 3, 4, 5];
const B = [5, 4, 3, 2, 1, 0];

// Function to merge and find products
function findProductOfMergedArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    throw new Error("Arrays must have the same length");
  }

  const mergedArray = [];
  const productArray = [];

  // Merge the arrays
  for (let i = 0; i < arr1.length; i++) {
    mergedArray.push(arr1[i] + arr2[i]);
  }

  // Calculate the products
  for (let i = 0; i < mergedArray.length; i++) {
    let product = 1;
    for (let j = 0; j < mergedArray.length; j++) {
      if (i !== j) {
        product *= mergedArray[j];
      }
    }
    productArray.push(product);
  }

  return productArray;
}

// Find and print the product of merged arrays
const productResult = findProductOfMergedArrays(A, B);
console.log("Product of merged arrays:", productResult);
