const c = document.getElementById('embers');
const x = c.getContext('2d');

function resize() {
    c.width = innerWidth;
    c.height = innerHeight;
}

resize();
window.onresize = resize;

let particles = [...Array(120)].map(() => ({
    x: Math.random() * c.width,
    y: Math.random() * c.height,
    r: Math.random() * 2 + 1,
    v: -Math.random() - 0.2
}));

function animate() {

    x.clearRect(0, 0, c.width, c.height);

    particles.forEach(p => {

        x.fillStyle = "orange";

        x.beginPath();
        x.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        x.fill();

        p.y += p.v;

        if (p.y < 0) {
            p.y = c.height;
            p.x = Math.random() * c.width;
        }
    });

    requestAnimationFrame(animate);
}

animate();
