// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    
    return true;
  }
  
  // Function to find prime numbers in an array
  function findPrimes(arr) {
    const primeNumbers = [];
    
    for (let i = 0; i < arr.length; i++) {
      if (isPrime(arr[i])) {
        primeNumbers.push(arr[i]);
      }
    }
    
    return primeNumbers;
  }
  
  // Test case 1
  const arr1 = [1, 2, 5, 4, 0];
  const primeNumbers1 = findPrimes(arr1);
  console.log("Test case 1 - Prime numbers:", primeNumbers1);
  
  // Test case 2
  const arr2 = [1, 2, 3, 4, 5];
  const primeNumbers2 = findPrimes(arr2);
  console.log("Test case 2 - Prime numbers:", primeNumbers2);
  