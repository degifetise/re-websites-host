const navbar = document.getElementById("navbar");
const outdent = document.getElementById("outdent");

outdent.addEventListener("click", () => {
navbar.classList.toggle("navbarDisplay");

if(navbar.classList.contains("navbarDisplay")) {
outdent.innerHTML = `<i class="fas fa-times"></i>`;
}
else{
outdent.innerHTML = `<i class="fas fa-bars"></i>`;
}

});

// pop up value products added



const adeBtn = document.querySelectorAll("#cartBtn");



const counterContainer = document.getElementById("counter");

if(!counterContainer) {
console.log("no this element here");
} else {
adeBtn.forEach((button) => {

button.addEventListener("click", () => {

setTimeout(() => {
let count = parseInt(counterContainer.innerText, 10) || 0;
count++;
counterContainer.innerText = count;

setTimeout(() => {
button.innerText = "Take Your Cart";
}, 1000);
setTimeout(() => {
button.innerText = "Checked Up";
}, 3000)
/*setTimeout(() => {
/*button.innerHTML = '<i class="fas fa-circle-notch fa-spin spinner"></i>';
/*
/*}, 500);*/

button.innerHTML = '<i class="fas fa-circle-notch fa-spin spinner"></i>';

}, 999);

})
});
}



//to read enter text by soound*/

let speech = new SpeechSynthesisUtterance();

document.getElementById("productRead").addEventListener("click", () => {

speech.text = "we don't have this product now"+ document.getElementById("productName").value;

window.speechSynthesis.speak(speech);
document.getElementById("productName").value= "";
});



// Define common animation settings
const scrollRevealOptions = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
  delay: 200,
  reset: true
};

// Apply ScrollReveal animations
ScrollReveal().reveal(".product-grid", {
  ...scrollRevealOptions,
  origin: "right"
});

ScrollReveal().reveal(".section-content h1", {
  ...scrollRevealOptions,
  origin: "right"
});

ScrollReveal().reveal(".section-content", {
  ...scrollRevealOptions,
  origin: "right"
});
