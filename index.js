import "./styles.css";
// Remove the existing declaration of appContainer

// Create the counter element
const appContainer = document.getElementById("app");

const counterElement = document.createElement("div");
counterElement.classList.add("counter");
appContainer.appendChild(counterElement);

// Initialize the counter value
let counterValue = 0;

// Function to update the counter display
function updateCounterDisplay() {
  counterElement.textContent = counterValue.toString().padStart(5, "0");
}

// Function to increment the counter
function incrementCounter() {
  counterValue++;
  if (counterValue > 99999) {
    counterValue = 0;
  }
  updateCounterDisplay();
}

// Set up the counter interval
setInterval(incrementCounter, 1000);

// Initial counter display
updateCounterDisplay();
