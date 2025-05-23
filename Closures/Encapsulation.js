
  function createCounter() {
    let count = 0;
  
    return {
      increment: function () {
        count++;
      },
      getCount: function () {
        return count;
      }
    };
  }
  
  const counter = createCounter();
  counter.increment();
  console.log(counter.getCount()); // 1
  console.log(counter.count); // undefined ❌
