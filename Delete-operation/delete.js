const products = [
  { id: 1, name: 'A' },
  { id: 2, name: 'B' },
  { id: 3, name: 'C' },
  { id: 4, name: 'D' },
  { id: 5, name: 'E' },
];


const productList = document.getElementById('product-list');

function renderProducts() {
  productList.innerHTML = '';
  products.forEach(product => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <h3>${product.name}</h3>
      <button class="delete-btn">❌ Delete</button>
    `;

    card.querySelector('.delete-btn').addEventListener('click', () => {
      deleteProduct(product.id);
    });

    productList.appendChild(card);
  });
}



function deleteProduct(id) {
  const updatedProducts = products.filter(p => p.id !== id);

  products.length = 0; 
  products.push(...updatedProducts);

  renderProducts();
}

renderProducts();








