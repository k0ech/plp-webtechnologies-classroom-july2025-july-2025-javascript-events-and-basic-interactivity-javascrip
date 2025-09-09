//Part 1: Event Handling
// Find button and message
const helloBtn = document.getElementById("helloBtn");
const helloMessage = document.getElementById("helloMessage");

// When button is clicked, show message
helloBtn.addEventListener("click", function () {
  helloMessage.textContent = "Hello! 👋 You clicked the button!";
});



// Part 2: Interactive Elements
// 1. Light/Dark Mode
const themeBtn = document.getElementById("themeBtn");
themeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});

// 2. Counter
let count = 0;
const counter = document.getElementById("counter");

document.getElementById("addBtn").addEventListener("click", function () {
  count = count + 1; 
  counter.textContent = count; // update display
});

document.getElementById("resetBtn").addEventListener("click", function () {
  count = 0; // reset count
  counter.textContent = count;
});

// 3. FAQ Toggle
const question = document.querySelector(".question");
const answer = document.querySelector(".answer");

question.addEventListener("click", function () {
  answer.classList.toggle("show"); // show/hide the answer
});


// Part 3: Form Validation
const form = document.getElementById("signupForm");
const feedback = document.getElementById("formFeedback");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // stop page from refreshing

  // Get values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Clear old messages
  feedback.innerHTML = "";

  // Check inputs
  if (name.length < 2) {
    feedback.innerHTML += "<p class='error'>Name must be at least 2 characters.</p>";
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    feedback.innerHTML += "<p class='error'>Enter a valid email.</p>";
  }

  if (password.length < 6) {
    feedback.innerHTML += "<p class='error'>Password must be at least 6 characters.</p>";
  }

  // If no errors, show success
  if (feedback.innerHTML === "") {
    feedback.innerHTML = "<p class='success'>✅ Form submitted successfully!</p>";
    form.reset();
  }
});
