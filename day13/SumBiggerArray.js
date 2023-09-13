function sumArray(arr) {
    return arr.reduce((acc, current) => acc + current, 0);
  }
  
  function compareArraysAndReturnBiggerSumArray(arrA, arrB) {
    const sumA = sumArray(arrA);
    const sumB = sumArray(arrB);
  
    if (sumA === sumB) {
      return "Both arrays have the same sum.";
    } else if (sumA > sumB) {
      return arrA;
    } else {
      return arrB;
    }
  }
  
  const A = [0, 1,12, 3, 4, 5];
  const B = [5, 4, 3, 2, 1, 0];
  
  const resultArray = compareArraysAndReturnBiggerSumArray(A, B);
  
  console.log("Result Array:", resultArray);
  