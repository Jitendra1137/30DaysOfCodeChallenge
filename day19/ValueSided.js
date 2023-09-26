function rearrangeNegativeNumbers(arr) {
    let left = 0; // Index for the left side of the array
  
    for (let right = 0; right < arr.length; right++) {
      if (arr[right] < 0) {
        // Swap the elements at left and right indices
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++; // Move the left index one step to the right
      }
    }
  
    return arr;
  }
  
  const originalArray = [-1, -1, 0, 9, -6];
  const rearrangedArray = rearrangeNegativeNumbers(originalArray);
  
  console.log(rearrangedArray); // Output: [-1, -1, -6, 9, 0]
  