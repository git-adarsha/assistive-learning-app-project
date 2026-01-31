const baseColors = ["red", "blue", "yellow"];
const mixRules = {
  "red+blue": "purple",
  "blue+red": "purple",
  "yellow+blue": "green",
  "blue+yellow": "green",
  "red+yellow": "orange",
  "yellow+red": "orange"
};

// Cat images
const catImages = ["../asessts/cat1.png", "cat2.png", "cat3.png", "cat4.png"];

let points = 0;
let color1 = "";
let color2 = "";
let correctMix = "";
let userGuess = "";

startRound();

function startRound() {
  // Reset slimes
  const slimeArea = document.querySelector(".slime-area");
  slimeArea.innerHTML = `
    <div id="slime1" class="slime"></div>
    <div id="slime2" class="slime"></div>
  `;

  userGuess = "";
  document.getElementById("message").textContent = "";

  // Pick two different colors
  color1 = baseColors[Math.floor(Math.random() * baseColors.length)];
  do {
    color2 = baseColors[Math.floor(Math.random() * baseColors.length)];
  } while (color2 === color1);

  correctMix = mixRules[`${color1}+${color2}`];

  // Apply colors to slimes
  document.getElementById("slime1").style.background = `radial-gradient(circle at top left, #ffffff66, ${color1})`;
  document.getElementById("slime2").style.background = `radial-gradient(circle at top left, #ffffff66, ${color2})`;
}

function guessColor(choice) {
  userGuess = choice;
  document.getElementById("message").textContent = `You guessed ${choice}. Now press MIX!`;
}

function mixSlime() {
  if (!userGuess) {
    document.getElementById("message").textContent = "⚠️ Guess the color first!";
    return;
  }

  const slimeArea = document.querySelector(".slime-area");
  slimeArea.innerHTML = `<div id="finalSlime" class="slime"></div>`;
  const finalSlime = document.getElementById("finalSlime");
  finalSlime.style.background = `radial-gradient(circle at top left, #ffffff66, ${correctMix})`;
  finalSlime.classList.add("mix");

  if (userGuess === correctMix) {
    points++; // increment points immediately
    document.getElementById("points").textContent = `Points: ${points}`;
    document.getElementById("message").textContent = `✅ Correct! ${capitalize(color1)} + ${capitalize(color2)} = ${correctMix}`;
    updateCat(); // change cat immediately
    showConfetti();
  } else {
    document.getElementById("message").textContent = `❌ Wrong! ${capitalize(color1)} + ${capitalize(color2)} = ${correctMix}`;
  }

  setTimeout(startRound, 1500);
}

// Update cat after every point
function updateCat() {
  const cat = document.getElementById("cat");
  const catIndex = Math.min(points - 1, catImages.length - 1); // immediate change
  cat.src = catImages[catIndex];

  // Trigger bounce animation
  cat.classList.remove("animate");
  void cat.offsetWidth;
  cat.classList.add("animate");
}

// Confetti effect
function showConfetti() {
  const confettiContainer = document.getElementById("confetti");
  confettiContainer.innerHTML = "";
  const colors = ["#ff0","#f0f","#0ff","#f00","#0f0","#00f"];

  for(let i=0;i<50;i++){
    const conf = document.createElement("div");
    conf.className = "confetti";
    conf.style.background = colors[Math.floor(Math.random()*colors.length)];
    conf.style.left = Math.random()*100 + "vw";
    conf.style.animationDelay = Math.random()*0.5 + "s";
    confettiContainer.appendChild(conf);
  }

  setTimeout(() => confettiContainer.innerHTML = "", 1500);
}

// Helper
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
// Existing game code ...

// Toggle description panel
function toggleDescription() {
  const desc = document.getElementById("description");
  const btn = document.getElementById("descBtn");
  if(desc.style.display === "none" || desc.style.display === "") {
    desc.style.display = "block";
    btn.textContent = "Hide Instructions";
  } else {
    desc.style.display = "none";
    btn.textContent = "Show Game Instructions";
  }
}