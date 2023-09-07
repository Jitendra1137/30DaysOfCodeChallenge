function sumArrays(array1, array2) {
  if (array1.length !== array2.length) {
    throw new Error("Arrays must have the same length");
  }

  let sum = 0;
  for (let i = 0; i < array1.length; i++) {
    sum += array1[i] + array2[i];
  }

  return sum;
}

const A = [0, 1, 2, 3, 4, 5];
const B = [5, 4, 3, 2, 1, 0];

if (A.length === B.length) {
  const result = sumArrays(A, B);
  console.log("Sum of the arrays A and B:", result);
} else {
  console.error("Arrays must have the same length to calculate the sum.");
}
