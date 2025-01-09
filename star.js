// Add to Cart Functionality
const cart = [];

document.querySelectorAll(".add-to-cart").forEach((button) => {
  button.addEventListener("click", (event) => {
    const itemElement = event.target.parentElement;
    const itemName = itemElement.dataset.name;
    const itemPrice = parseFloat(itemElement.dataset.price);

    // Add item to cart
    cart.push({ name: itemName, price: itemPrice });

    // Alert user
    console.log(cart);
  });
});

// Mood Selector Functionality
document.getElementById("mood-form")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const mood = document.querySelector('input[name="mood"]:checked')?.value;

  if (!mood) {
    alert("Please select a mood!");
    return;
  }

  let suggestion = "";
  switch (mood) {
    case "Energetic":
      suggestion = "Try an Espresso to keep you energized!";
      break;
    case "Relaxed":
      suggestion = "A Cappuccino would be perfect for relaxing.";
      break;
    case "Focused":
      suggestion = "A Latte can help you stay focused.";
      break;
    case "Adventurous":
      suggestion = "Explore new flavors with a Mocha!";
      break;
    default:
      suggestion = "We're not sure, but coffee is always a good idea!";
  }

  document.getElementById("suggestion").textContent = suggestion;
});