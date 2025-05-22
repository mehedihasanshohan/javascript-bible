function getData() {
  fetch("https://invalid-url")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("❌ Caught:", error.message);
    });
}

getData();
