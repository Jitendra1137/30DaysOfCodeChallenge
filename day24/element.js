function hasPairWithSum(arr, targetSum) {
  const seen = new Set();
  
  for (let num of arr) {
    const complement = targetSum - num;
    if (seen.has(complement)) {
      return true;
    }
    seen.add(num);
  }
  
  return false;
}

const arr = [1, 2, 3, 4, 5];
const targetSum = 10;

if (hasPairWithSum(arr, targetSum)) {
  console.log("There are elements that can make the sum:", targetSum);
} else {
  console.log("No elements can make the sum:", targetSum);
}
