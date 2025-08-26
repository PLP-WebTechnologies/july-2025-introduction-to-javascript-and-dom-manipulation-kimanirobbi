// ===============================
// Part 1: Variables & Conditionals
// ===============================
function checkUserAge() {
  let age = document.getElementById("ageInput").value;
  let message;

  if (age === "") {
    message = "Please enter your age.";
  } else if (age >= 18) {
    message = "You are an adult.";
  } else {
    message = "You are still a minor.";
  }

  console.log(message); // Output to console
  document.getElementById("ageResult").textContent = message; // Output to page
}

// ===============================
// Part 2: Functions
// ===============================

// Function 1: Calculate total of two numbers
function calculateTotal() {
  let n1 = parseInt(document.getElementById("num1").value) || 0;
  let n2 = parseInt(document.getElementById("num2").value) || 0;
  let total = n1 + n2;

  document.getElementById("totalResult").textContent = "Total = " + total;
}

// Function 2: Toggle visibility of text
function toggleMessage() {
  let text = document.getElementById("toggleText");
  if (text.style.display === "none") {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}

// ===============================
// Part 3: Loops
// ===============================

// Loop Example 1: For loop to show numbers
function showNumbers() {
  let list = document.getElementById("numberList");
  list.innerHTML = ""; // clear old content

  for (let i = 1; i <= 5; i++) {
    let li = document.createElement("li");
    li.textContent = i;
    list.appendChild(li);
  }
}

// Loop Example 2: While loop countdown
function countdown() {
  let list = document.getElementById("countdownList");
  list.innerHTML = "";

  let i = 5;
  while (i > 0) {
    let li = document.createElement("li");
    li.textContent = i;
    list.appendChild(li);
    i--;
  }
}

// ===============================
// Part 4: DOM Manipulation
// ===============================

// 1. Change heading text
function changeHeading() {
  document.querySelector("h1").textContent = "Heading Changed with JavaScript!";
  document.getElementById("domMessage").textContent = "Heading updated ✅";
}
