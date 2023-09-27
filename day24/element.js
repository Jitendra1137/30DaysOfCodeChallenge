function findPairsWithSum(arr, targetSum) {
    const result = [];
    const seen = new Set();
  
    for (const num of arr) {
      const complement = targetSum - num;
      
      if (seen.has(complement)) {
        result.push([num, complement]);
      }
      
      seen.add(num);
    }
  
    return result;
  }
  
  const arr = [1, 2, 3, 4, 5];
  const targetSum = 10;
  const pairs = findPairsWithSum(arr, targetSum);
  console.log(pairs);
  