function outer() {
  let name = "Shohan";

  function inner() {
    console.log(name); // ✅ Access করে ফেলছে outer এর variable
  }

  return inner;
}

const fn = outer();
fn(); // Output: Shohan
