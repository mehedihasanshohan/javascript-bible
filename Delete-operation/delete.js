const products = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 59.99,
    image: 'https://placehold.co/300x200/EEE/333?text=Headphones',
  },
  {
    id: 2,
    name: 'Smartphone',
    price: 499.99,
    image: 'https://placehold.co/300x200/DDD/000?text=Smartphone',
  },
  {
    id: 3,
    name: 'Laptop',
    price: 899.99,
    image: 'https://placehold.co/300x200/CCC/000?text=Laptop',
  },
  {
    id: 4,
    name: 'Smart Watch',
    price: 199.99,
    image: 'https://placehold.co/300x200/BBB/000?text=Smart+Watch',
  },
  {
    id: 5,
    name: 'Bluetooth Speaker',
    price: 29.99,
    image: 'https://placehold.co/300x200/AAA/000?text=Speaker',
  },
  {
    id: 6,
    name: 'Gaming Mouse',
    price: 24.99,
    image: 'https://placehold.co/300x200/999/FFF?text=Gaming+Mouse',
  },
  {
    id: 7,
    name: 'Mechanical Keyboard',
    price: 69.99,
    image: 'https://placehold.co/300x200/888/FFF?text=Keyboard',
  },
  {
    id: 8,
    name: '4K Monitor',
    price: 299.99,
    image: 'https://placehold.co/300x200/777/FFF?text=4K+Monitor',
  }
];


const productList = document.getElementById('product-list');

function renderProducts() {
  productList.innerHTML = '';
  products.forEach(product => {
    const card = document.createElement('div');
    card.className = 'card';
   card.innerHTML = `
      <div class="product-card" style="border: 1px solid #ccc; padding: 10px; border-radius: 8px; text-align: center;">
        <img src="${product.image}" alt="${product.name}" style="width: 100%; height: auto; border-radius: 6px;" />
        <h3 style="margin: 10px 0;">${product.name}</h3>
        <p style="color: green; font-weight: bold;"> Price: $${product.price}</p>
        <button class="delete-btn" style="background: #f44336; color: white; border: none; padding: 5px 10px; cursor: pointer; border-radius: 4px;">
          Delete
        </button>
      </div>
    `;
    ;

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








