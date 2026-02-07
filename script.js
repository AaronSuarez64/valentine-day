// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".btn[alt='Yes']");
const music = document.getElementById("bg-music");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

// Open envelope
envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";

    // Play music (user interaction required by browser)
    music.volume = 0.6;
    music.play();

    setTimeout(() => {
        document.querySelector(".letter-window").classList.add("open");
    }, 50);
});

// YES button growing logic
let yesScale = 1;
yesBtn.style.position = "relative";
yesBtn.style.transformOrigin = "center center";
yesBtn.style.transition = "transform 0.3s ease";

noBtn.addEventListener("click", () => {
    yesScale += 0.5;

    yesBtn.style.position = "fixed";
    yesBtn.style.top = "50%";
    yesBtn.style.left = "50%";
    yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
});

// YES clicked
yesBtn.addEventListener("click", () => {
    title.textContent = "YIPPEEEE!!! 💕";
    catImg.src = "cat_dance.gif";

    document.querySelector(".letter-window").classList.add("final");
    buttons.style.display = "none";
    finalText.style.display = "block";

    // Romantic hearts effect
    spawnHearts();
});

// Hearts animation
function spawnHearts() {
    setInterval(() => {
        const heart = document.createElement("div");
        heart.innerHTML = "💖";
        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.bottom = "0px";
        heart.style.fontSize = Math.random() * 20 + 20 + "px";
        heart.style.animation = "floatUp 4s linear";
        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 4000);
    }, 300);
}
