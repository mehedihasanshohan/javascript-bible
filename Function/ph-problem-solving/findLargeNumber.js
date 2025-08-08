function findLargeNumber(numbers) {
  let largestNumber = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > largestNumber) {
      largestNumber = numbers[i];
    }
  }
  return largestNumber;
}

const numbers = [2, 3, 4, 5];
console.log(findLargeNumber(numbers)); // 5
