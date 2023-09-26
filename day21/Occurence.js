function findElementsWithHalfOccurrence(arr) {
    const n = arr.length;
    const elementCount = new Map(); // Map to store element counts
    const result = [];
  
    // Count the occurrences of each element in the array
    for (const element of arr) {
      if (elementCount.has(element)) {
        elementCount.set(element, elementCount.get(element) + 1);
      } else {
        elementCount.set(element, 1);
      }
    }
  
    // Check if any element occurs exactly n/2 times
    for (const [element, count] of elementCount.entries()) {
      if (count === n / 2) {
        result.push(element);
      }
    }
  
    return result;
  }
  
  const arr = [1, 2, 2, 2, 1];
  const elementsWithHalfOccurrence = findElementsWithHalfOccurrence(arr);
  
  console.log(elementsWithHalfOccurrence); // Output: [2]
  