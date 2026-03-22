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

const cards = document.querySelectorAll(".skill-card");

cards.forEach(card => {
    card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateX = (y / rect.height - 0.5) * 10;
        const rotateY = (x / rect.width - 0.5) * -10;

        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "rotateX(0) rotateY(0) scale(1)";
    });
});


const text = "Transforming Raw Data → Meaningful Insights";
const typingElement = document.getElementById("typing");

let index = 0;

function typeEffect() {
    if (index < text.length) {
        typingElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, 40);
    }
}

typeEffect();