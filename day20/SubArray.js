function findAllSubarrays(arr) {
    const subarrays = [];
  
    for (let start = 0; start < arr.length; start++) {
      for (let end = start + 1; end <= arr.length; end++) {
        const subarray = arr.slice(start, end);
        subarrays.push(subarray);
      }
    }
  
    return subarrays;
  }
  
  const originalArray = [1, 2, 3];
  const subarrays = findAllSubarrays(originalArray);
  
  console.log(subarrays);
  