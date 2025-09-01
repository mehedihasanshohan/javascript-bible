const cart = [
  { name: "Shirt", price: 500 },
  { name: "Pant", price: 700 },
  { name: "Shoe", price: 1200 }
];

const totalPrice = cart.reduce((acc, item) => {
  return acc + item.price;
}, 0);

console.log(totalPrice); // 2400




// combined example of map, forEach, filter, find, reduce
const products = [
  { name: "🍔 Burger", price: 150 },
  { name: "🍕 Pizza", price: 300 },
  { name: "🌭 Hotdog", price: 120 },
  { name: "🍩 Donut", price: 80 },
];

// 1. map – get prices
const prices = products.map(p => p.price);

// 2. forEach – log each product
products.forEach(p => console.log(p.name));

// 3. filter – only expensive items
const expensive = products.filter(p => p.price > 100);

// 4. find – first product over 200
const premium = products.find(p => p.price > 200);

// 5. reduce – total bill
const total = products.reduce((sum, p) => sum + p.price, 0);

console.log({ prices, expensive, premium, total });
/*
👉 {
  prices: [150, 300, 120, 80],
  expensive: [🍔 Burger, 🍕 Pizza, 🌭 Hotdog],
  premium: 🍕 Pizza,
  total: 650
}
*/
