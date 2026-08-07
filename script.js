
// 💌 Your Love Letter Text
const loveLetter = `My dearest love, ❤️

Every moment with you feels like magic.
You are my sunshine, my joy, my forever.

From the day we met, my heart knew
it found its home in you.

Forever yours,
Meet 💕`;

const letter = document.getElementById("letter");

let index = 0;

function typeLetter() {
    if (index < loveLetter.length) {
        letter.textContent += loveLetter.charAt(index);
        index++;
        setTimeout(typeLetter, 50);
    }
}

typeLetter();

// Floating Hearts Animation
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";
    heart.style.animationDuration = (Math.random() * 3 + 3) + "s";

    document.querySelector(".hearts").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}

setInterval(createHeart, 300);
