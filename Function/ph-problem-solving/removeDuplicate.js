function removeItem(numbers) {

    let newArray = [];

    for (i=0; i<numbers.length; i++) {
            if(!newArray.includes(numbers[i])){
              newArray.push(numbers[i]);
    }
  }
  return newArray;


}
const numbers =[1, 2, 3, 4, 5, 2, 2, 2, 2, 3, 3, 3, 3, 6, 6, 6, 6, 5, 4];
    const finalArray = removeItem(numbers);
console.log(finalArray);