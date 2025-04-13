const canvas = document.getElementById('backgroundCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let bubbles = [];

class Bubble {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = canvas.height + Math.random() * 100;
    this.radius = Math.random() * 10 + 5;
    this.speed = Math.random() * 2 + 1;
    this.opacity = Math.random();
  }

  update() {
    this.y -= this.speed;
    if (this.y < 0) {
      this.y = canvas.height + Math.random() * 100;
      this.x = Math.random() * canvas.width;
    }
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
    ctx.fill();
  }
}

function initBubbles() {
  for (let i = 0; i < 100; i++) {
    bubbles.push(new Bubble());
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  bubbles.forEach(bubble => {
    bubble.update();
    bubble.draw();
  });
  requestAnimationFrame(animate);
}

initBubbles();
animate();

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
