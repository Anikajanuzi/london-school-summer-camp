const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("Makarone");

if (menuToggle && menu) {
    menuToggle.addEventListener("click", () => {
    menu.classList.toggle("active");
    });
}



const videoModal = document.getElementById("videoModal");
const videoPlayer = videoModal ? videoModal.querySelector("video") : null;

function openVideo() {
    if (!videoModal) return;
    videoModal.classList.add("is-open");
    videoModal.setAttribute("aria-hidden", "false");
    document.body.classList.add("lightbox-open");
}

function closeVideo() {
    if (!videoModal) return;
    if (videoPlayer) {
        videoPlayer.pause();
        videoPlayer.currentTime = 0;
    }
    videoModal.classList.remove("is-open");
    videoModal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("lightbox-open");
}

document.addEventListener("keydown", (e) => {
    if (!videoModal) return;
    if (!videoModal.classList.contains("is-open")) return;
    if (e.key === "Escape") {
        closeVideo();
    }
});
