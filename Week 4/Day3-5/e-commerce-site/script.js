// Global state
let cart = [];
let products = [];

// Fetch products on DOM load
document.addEventListener("DOMContentLoaded", () => {
  fetch("http://localhost:3000/products")
    .then(res => res.json())
    .then(data => {
      products = data;
      displayProducts(products);
    });
});

const productList = document.getElementById("productList");

// Display all products
function displayProducts(products) {
  productList.innerHTML = "";
  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.className = "product";
    productDiv.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>$${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productList.appendChild(productDiv);
  });
}

// Search functionality
const searchBar = document.getElementById("searchBar");
searchBar.addEventListener("input", (e) => {
  const searchTerm = e.target.value.toLowerCase();
  const filtered = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm)
  );
  displayProducts(filtered);
});

// Add to cart
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (product) {
    cart.push(product);
    alert(`${product.name} added to the cart!`);
    viewCart();
  }
}

// View cart and update total
function viewCart() {
  const cartList = document.getElementById("cartList");
  cartList.innerHTML = "";

  cart.forEach((item) => {
    const cartItem = document.createElement("div");
    cartItem.className = "cart-item";
    cartItem.innerHTML = `
      <h3>${item.name}</h3>
      <p>Price: $${item.price}</p>
      <button onclick="removeFromCart(${item.id})">Remove</button>
    `;
    cartList.appendChild(cartItem);
  });

  const total = cart.reduce((sum, item) => sum + item.price, 0);
  document.getElementById("totalPrice").textContent = `Total: $${total}`;
}

// Remove from cart
function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  viewCart();
}

// Checkout button logic
document.getElementById("checkoutButton").addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }
  alert("Thank you for your purchase!");
  cart = [];
  viewCart();
});
