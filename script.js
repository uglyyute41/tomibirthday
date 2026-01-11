function showSurprise() {
    window.location.href = "./suprise/surprise.html";
}

// Countdown (set her birthday date)
const birthday = new Date("2026-02-01").getTime();

setInterval(() => {
    const now = new Date().getTime();
    const diff = birthday - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    document.getElementById("countdown").innerText =
        days >= 0 ? `🎂 ${days} days to go!` : "🎉 It's her birthday today!";
}, 1000);

// Confetti
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confetti = [];

const colors = ['#ff6b6b', '#ffd93d', '#6bcB77', '#6b6bff', '#ff6bff', '#ff8c42'];
const balloonCount = 30; // number of balloons

for (let i = 0; i < balloonCount; i++) {
    const balloon = document.createElement('div');
    balloon.classList.add('balloon');

    // Random horizontal position
    balloon.style.left = Math.random() * 100 + '%';

    // Random size
    const size = 30 + Math.random() * 50;
    balloon.style.width = size + 'px';
    balloon.style.height = size * 1.3 + 'px';

    // Random color
    balloon.style.background = colors[Math.floor(Math.random() * colors.length)];

    // Random animation delay
    balloon.style.animationDelay = Math.random() * 5 + 's';

    document.body.appendChild(balloon);
}


function startConfetti() {
    for (let i = 0; i < 200; i++) {
        confetti.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            r: Math.random() * 6,
            d: Math.random() * 10
        });
    }
    animateConfetti();
}

function animateConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confetti.forEach((c, i) => {
        ctx.beginPath();
        ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
        ctx.fillStyle = "#ff4d6d";
        ctx.fill();
        c.y += c.d;
        if (c.y > canvas.height) confetti[i].y = 0;
    });
    requestAnimationFrame(animateConfetti);
}
