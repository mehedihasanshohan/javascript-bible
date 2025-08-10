function sum(numbs) {
    let total =0;
    for (num of numbs) {
            if(num%2===0){
                total=num+total;
    }
  }
  return total;
}
const ns =[1,2,3,4,5,6];
    const oddtotal = sum(ns);
console.log(oddtotal);
