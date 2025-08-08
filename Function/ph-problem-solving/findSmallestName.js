function findLargeName(heights) {
  let largestName = heights[0].length;
  for (let i = 0; i < heights.length; i++) {
    if (heights[i].length > largestName) {
      largestName = heights[i];
    }
  }
  return largestName;
}

const heights = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
console.log(findLargeName(heights)); // rashed
