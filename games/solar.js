const planets = [
  {
    name: "Mercury",
    image: "./planetassets/mercuryimg.jpg",
    fact: "Mercury is the closest planet to the Sun.",
  },
  {
    name: "Venus",
    image: "./planetassets/venusimg.jpg",
    fact: "Venus is the hottest planet.",
  },
  {
    name: "Earth",
    image: "./planetassets/earthimg.jpg",
    fact: "Earth is the only planet with known life.",
  },
  {
    name: "Mars",
    image: "./planetassets/marsimg.jpg",
    fact: "Mars is called the red planet.",
  },
  {
    name: "Jupiter",
    image: "./planetassets/jupiterimg.jpg",
    fact: "Jupiter is the largest planet.",
  },
  {
    name: "Saturn",
    image: "./planetassets/saturnimg.jpg",
    fact: "Saturn has large rings.",
  },
  {
    name: "Uranus",
    image: "./planetassets/uranusimg.jpg",
    fact: "Uranus spins on its side.",
  },
  {
    name: "Neptune",
    image: "./planetassets/neptuneimg.jpg",
    fact: "Neptune is very cold and windy.",
  },
];

const grid = document.getElementById("planetGrid");
const modal = document.getElementById("planetModal");
const planetName = document.getElementById("planetName");
const planetFact = document.getElementById("planetFact");
const planetImage = document.getElementById("planetImage");

planets.forEach((planet) => {
  const card = document.createElement("div");
  card.className = "planet-card";
  card.tabIndex = 0;

  const img = document.createElement("img");
  img.src = planet.image;
  img.alt = planet.name;
  img.className = "planet-img";

  const name = document.createElement("div");
  name.className = "planet-name";
  name.textContent = planet.name;

  card.appendChild(img);
  card.appendChild(name);

  card.addEventListener("click", () => openModal(planet));
  card.addEventListener("keydown", (e) => {
    if (e.key === "Enter") openModal(planet);
  });

  grid.appendChild(card);
});

function openModal(planet) {
  planetName.textContent = planet.name;
  planetFact.textContent = planet.fact;
  planetImage.src = planet.image;
  planetImage.alt = planet.name;
  modal.style.display = "flex";
}

function closeModal() {
  modal.style.display = "none";
}
// Play Games Button
const playBtn = document.getElementById("playGamesBtn");

// Show button after all planets are loaded
window.addEventListener("DOMContentLoaded", () => {
  // Slight delay to make it feel like it appears after planets
  setTimeout(() => {
    playBtn.style.display = "inline-block";
  }, 500); // 0.5s after page load
});

// Click action for the button
playBtn.addEventListener("click", () => {
  // Redirect to games page or do anything you like
  window.location.href = "solargames.html"; // replace with your games URL
});
