// 1  find the maximum element of an array [1,2, 3, 4,5, 6]

const arr = [1, 2, 3, 4, 5 ,6 ];
const maxElement = Math.max(...arr);

console.log("Maximum element:", maxElement);


//  2 Find the 2nd max element of an array without using any predefined question [1,2,3,4,5] , [1,2,4,4,5] , [1,2,4,3,5]


function findSecondMax(arr) {
    if (arr.length < 2) {
      return "Array should have at least two elements";
    }
  
    let max = arr[0];
    let secondMax = arr[1];
  
    if (secondMax > max) {
      [max, secondMax] = [secondMax, max]; // Swap max and secondMax
    }
  
    for (let i = 2; i < arr.length; i++) {
      if (arr[i] > max) {
        secondMax = max;
        max = arr[i];
      } else if (arr[i] > secondMax && arr[i] !== max) {
        secondMax = arr[i];
      }
    }
  
    return secondMax;
  }
  
  const arr1 = [1, 2, 3, 4, 5];
  const arr2 = [1, 2, 4, 4, 5];
  const arr3 = [1, 2, 4, 3, 5];
  
  console.log("Second max in arr1:", findSecondMax(arr1)); // Output: 4
  console.log("Second max in arr2:", findSecondMax(arr2)); // Output: 4
  console.log("Second max in arr3:", findSecondMax(arr3)); // Output: 4
  

