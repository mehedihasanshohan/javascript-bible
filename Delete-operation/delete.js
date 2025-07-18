const products = [
  { id: 1, name: 'ল্যাপটপ' },
  { id: 2, name: 'মোবাইল' },
  { id: 3, name: 'ঘড়ি' },
  { id: 4, name: 'জুতা' },
  { id: 5, name: 'ব্যাগ' },
];

const productList = document.getElementById('product-list');

function renderProducts() {
  productList.innerHTML = ''; // আগের সব মুছে ফেল
  products.forEach(product => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <h3>${product.name}</h3>
      <button class="delete-btn">❌ Delete</button>
    `;

    productList.appendChild(card);
  });
}

renderProducts();
