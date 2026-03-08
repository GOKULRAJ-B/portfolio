// Scroll Reveal
const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
    sections.forEach(section => {
        const position = section.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        if (position < screenPosition) {
            section.classList.add("visible");
        }
    });
});

// Mouse Grid Tilt
document.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 10;
    const y = (e.clientY / window.innerHeight - 0.5) * 10;
    document.documentElement.style.setProperty("--rotateY", `${x}deg`);
    document.documentElement.style.setProperty("--rotateX", `${65 - y}deg`);
});

// Particles
const particlesContainer = document.querySelector(".particles");

for (let i = 0; i < 35; i++) {
    const particle = document.createElement("span");
    particle.style.left = Math.random() * 100 + "vw";
    particle.style.animationDuration = (Math.random() * 10 + 10) + "s";
    particlesContainer.appendChild(particle);
}