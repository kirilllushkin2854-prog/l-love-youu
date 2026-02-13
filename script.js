/* 🌙 смена текста - ТОЛЬКО ОДИН РАЗ */
const texts = [
  "be my valentine!",
  "You are, by far, the brightest star",
  "I've ever seen, and I never dreamedt",
  "I'd be so happy that I could die",
  "When I think of you, the world stops for a moment, and everything around me becomes soft and warm. My heart has found a home in your arms, and I want to walk through life with you hand in hand, in every breath and every moment.",
  
];

let index = 0;
const textDiv = document.getElementById("text");
let textChanged = false;

function changeText() {
  if (textChanged) return;

  if (index < texts.length - 1) {
    index++;
    textDiv.style.opacity = 0;
    setTimeout(() => {
      textDiv.innerText = texts[index];
      textDiv.style.opacity = 1;
    }, 300);

    setTimeout(changeText, 4000);
  } else {
    textChanged = true;
  }
}

setTimeout(changeText, 4000);

/* 🤍 фоновые круги */
function createBackground() {
  const el = document.createElement("div");
  el.className = "circle";
  const size = 3 + Math.random() * 8;
  el.style.width = size + "px";
  el.style.height = size + "px";
  el.style.left = Math.random() * window.innerWidth + "px";
  el.style.bottom = "-30px";
  el.style.animationDuration = 8 + Math.random() * 6 + "s";
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 15000);
}

setInterval(createBackground, 600);

/* 🌸 при клике появляются цветы сакуры И сердечки */
document.addEventListener("click", (e) => {
  if (Math.random() < 0.5) {
    // 🌸 сакура
    const flower = document.createElement("div");
    flower.className = "sakura";
    flower.style.left = e.clientX + "px";
    flower.style.top = e.clientY + "px";
    flower.innerHTML = `
      <svg viewBox="0 0 200 200">
        <path d="
          M100 40
          C130 10 190 40 160 90
          C200 100 180 170 130 150
          C120 200 80 200 70 150
          C20 170 0 100 40 90
          C10 40 70 10 100 40
          Z"
          fill="#ffd6e7"
          stroke="#f29bb3"
          stroke-width="6"/>
        <circle cx="100" cy="110" r="18"
          fill="#fff2a8"
          stroke="#f5d76e"
          stroke-width="4"/>
      </svg>
    `;
    document.body.appendChild(flower);
    setTimeout(() => flower.remove(), 5400);
  } else {
    // 💖 сердечко
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.style.left = e.clientX + "px";
    heart.style.top = e.clientY + "px";

    const gradId = 'heart' + Math.random().toString(36).substr(2, 9);

    heart.innerHTML = `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="${gradId}" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#ffb6d5;stop-opacity:0.9" />
            <stop offset="50%" style="stop-color:#ff99c9;stop-opacity:0.85" />
            <stop offset="100%" style="stop-color:#ff69b4;stop-opacity:0.9" />
          </linearGradient>
        </defs>
        <path d="M50 85 C25 72 8 58 8 42 C8 28 18 16 28 16 C36 16 44 22 50 30 C56 22 64 16 72 16 C82 16 92 28 92 42 C92 58 75 72 50 85 Z"
          fill="url(#${gradId})"
          stroke="#ffb6d5"
          stroke-width="0.8"/>
      </svg>
    `;

    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5400);
  }
});