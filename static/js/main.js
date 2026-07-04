// main.js — students will add JavaScript here as features are built

document.addEventListener("DOMContentLoaded", function () {
    var trigger = document.getElementById("how-it-works-btn");
    var modal = document.getElementById("how-it-works-modal");
    var closeBtn = document.getElementById("modal-close-btn");
    var iframe = document.getElementById("how-it-works-iframe");

    if (!trigger || !modal || !closeBtn || !iframe) {
        return;
    }

    // Placeholder video — replace with the real "how it works" URL later.
    var videoSrc = "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1";

    function openModal(event) {
        event.preventDefault();
        iframe.src = videoSrc;
        modal.classList.add("is-open");
        document.body.style.overflow = "hidden";
    }

    function closeModal() {
        modal.classList.remove("is-open");
        iframe.src = ""; // stops playback instead of continuing in background
        document.body.style.overflow = "";
    }

    trigger.addEventListener("click", openModal);
    closeBtn.addEventListener("click", closeModal);

    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape" && modal.classList.contains("is-open")) {
            closeModal();
        }
    });
});
