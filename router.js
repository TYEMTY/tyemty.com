document.getElementById("year").textContent = new Date().getFullYear();

const LINKS = {
  spotify: "https://open.spotify.com",
  apple: "https://music.apple.com",
  youtube: "https://www.youtube.com/@TYEMTYMUSIC",
  tiktok: "https://www.tiktok.com/@TYEMTYMUSIC",
  instagram: "https://www.instagram.com/TYEMTYMUSIC",
  merch: "https://yourstore.com"
};

const params = new URLSearchParams(window.location.search);
const to = params.get("to");

function isIOS() {
  return /iPhone|iPad|iPod/i.test(navigator.userAgent);
}

if (to === "music") {
  window.location.href = isIOS() ? LINKS.apple : LINKS.spotify;
}
if (to === "video") {
  window.location.href = LINKS.youtube;
}
if (to && LINKS[to]) {
  window.location.href = LINKS[to];
}

document.getElementById("signupForm")?.addEventListener("submit", e => {
  e.preventDefault();
  document.getElementById("formNote").textContent =
    "Saved! Email system will be connected soon.";
});
