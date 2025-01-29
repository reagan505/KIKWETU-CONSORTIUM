const products = [
  {
    id: 1,
    name: "Handwoven Kitenge Fabrics",
    price: "$25",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 2,
    name: "African Beaded Necklaces",
    price: "$15",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 3,
    name: "Handcrafted Wooden Masks",
    price: "$50",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 4,
    name: "Safari-Themed T-Shirts",
    price: "$20",
    image: "https://via.placeholder.com/300x200",
  },
];

const productList = document.getElementById("product-list");

products.forEach((product) => {
  const productCard = document.createElement("div");
  productCard.className = "product-card";

  productCard.innerHTML = `
    <img src="${product.image}" alt="${product.name}" class="product-image">
    <div class="product-details">
      <h2 class="product-title">${product.name}</h2>
      <p class="product-price">${product.price}</p>
      <a href="#" class="cta">Buy Now</a>
    </div>
  `;

  productList.appendChild(productCard);
});

function goToShop() {
  alert("Redirecting to the shop...");
  // Add logic for navigation to the shop page or section.
}