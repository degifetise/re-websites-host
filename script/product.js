

const products = [
{name: "Rose glow Serum", price:"450 ETb", image:"/Image/news.jpg"},
{name: " glow Serum", price:"450 ETb", image:"/Image/prodcut1.jpg"},
{name: "Ro glow Serum", price:"450 ETb", image:"/Image/prodcut1.jpg"},
{name: "se glow Serum", price:"450 ETb", image:"/Image/prodcut1.jpg"},
{name: "Rose glow Serum", price:"450 ETb", image:"/Image/news.jpg"},
{name: " glow Serum", price:"450 ETb", image:"/Image/prodcut1.jpg"},

];

const shopList = document.getElementById("shopList");

if(shopList) {
products.forEach(product => {
  shopList.innerHTML +=`
<div class="product-card">
<img src="${product.image}" alt="${product.name}">
<h3>${product.name}</h3>
<p>${product.price}</p>
<button id="viewDetails" onclick="window.location.href='product.html'">View Details</button>
</div>`;

});
}

const productCard = document.querySelectorAll(".product-card");

productCard.forEach(card => {

for(i=0; i<card.clientHeight; i++) {

setInterval(() => {
  
}, 4000);

}


})
