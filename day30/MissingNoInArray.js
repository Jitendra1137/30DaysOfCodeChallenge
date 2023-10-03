// Find the missing no in the array [1,2,3,5,6]
[1,2,3,4,5,6,8]



function findMissingNumber(arr1, arr2) {
    const missingNumbers = [];
    
    for (let i = 0; i < arr2.length; i++) {
      if (!arr1.includes(arr2[i])) {
        missingNumbers.push(arr2[i]);
      }
    }
    
    return missingNumbers;
  }
  
  const arr1 = [1, 2, 3, 5, 6];
  const arr2 = [1, 2, 3, 4, 5, 6, 8];
  
  const missingNumbers = findMissingNumber(arr1, arr2);
  console.log("Missing numbers:", missingNumbers);
  