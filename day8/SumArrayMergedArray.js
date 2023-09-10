function sumMergedArrays(arrA, arrB) {
    if (arrA.length !== arrB.length) {
      throw new Error("Arrays must have the same length");
    }
  
    return arrA.reduce((result, elementA, index) => {
      result.push(elementA + arrB[index]);
      return result;
    }, []);
  }
  
  const A = [1, 1, 1, 1, 1];
  const B = [2, 2, 2, 2, 2];
  
  const mergedSum = sumMergedArrays(A, B);
  console.log(mergedSum); // Output: [3, 3, 3, 3, 3]
  