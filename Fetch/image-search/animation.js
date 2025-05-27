// const canvas = document.getElementById("stars");
// const ctx = canvas.getContext("2d");

// function resizeCanvas() {
//   canvas.width = window.innerWidth;
//   canvas.height = window.innerHeight; // only the viewport height
// }

// resizeCanvas();

// const numStars = 200;
// const stars = [];

// for (let i = 0; i < numStars; i++) {
//   stars.push({
//     x: Math.random() * window.innerWidth,
//     y: Math.random() * window.innerHeight,
//     radius: Math.random() * 1.5 + 0.5,
//     speedY: Math.random() * 0.2 + 0.1,
//     opacity: Math.random(),
//     flicker: Math.random() * 0.05 + 0.01,
//   });
// }

// function animateStars() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);

//   for (let star of stars) {
//     star.opacity += star.flicker;
//     if (star.opacity >= 1 || star.opacity <= 0) {
//       star.flicker *= -1;
//     }

//     ctx.beginPath();
//     ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
//     ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
//     ctx.shadowBlur = 8;
//     ctx.shadowColor = "white";
//     ctx.fill();

//     // Move star downward
//     star.y += star.speedY;
//     if (star.y > canvas.height) {
//       star.y = 0;
//       star.x = Math.random() * canvas.width;
//     }
//   }

//   requestAnimationFrame(animateStars);
// }

// animateStars();
// window.addEventListener("resize", resizeCanvas);










const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

resizeCanvas();

const numStars = 200;
const colors = ["white", "red", "orangered"];
const stars = [];

for (let i = 0; i < numStars; i++) {
  const angle = Math.random() * 2 * Math.PI; // random angle
  const speed = Math.random() * 0.4 + 0.1;

  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 1.5 + 0.5,
    dx: Math.cos(angle) * speed,
    dy: Math.sin(angle) * speed,
    opacity: Math.random(),
    flicker: Math.random() * 0.05 + 0.01,
    color: colors[Math.floor(Math.random() * colors.length)],
  });
}

function animateStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let star of stars) {
    // Flicker
    star.opacity += star.flicker;
    if (star.opacity >= 1 || star.opacity <= 0) {
      star.flicker *= -1;
    }

    // Draw star
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${getColorRGB(star.color)}, ${star.opacity})`;
    ctx.shadowBlur = 8;
    ctx.shadowColor = star.color;
    ctx.fill();

    // Update position
    star.x += star.dx;
    star.y += star.dy;

    // Wrap around screen
    if (star.x < 0) star.x = canvas.width;
    if (star.x > canvas.width) star.x = 0;
    if (star.y < 0) star.y = canvas.height;
    if (star.y > canvas.height) star.y = 0;
  }

  requestAnimationFrame(animateStars);
}

function getColorRGB(colorName) {
  switch (colorName) {
    case "red": return "255, 0, 0";
    case "orangered": return "255, 69, 0";
    default: return "255, 255, 255"; // white
  }
}

animateStars();
window.addEventListener("resize", resizeCanvas);
