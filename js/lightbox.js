// Lightbox Slideshow
document.addEventListener("DOMContentLoaded", () => {
    const images = Array.from(document.querySelectorAll(".gallery-item img"));
    let currentIndex = 0;

    // Create lightbox container
    const lightbox = document.createElement("div");
    lightbox.id = "lightbox";

    const img = document.createElement("img");
    const btnPrev = document.createElement("button");
    const btnNext = document.createElement("button");
    const btnClose = document.createElement("button");

    btnPrev.id = "lightbox-prev";
    btnNext.id = "lightbox-next";
    btnClose.id = "lightbox-close";

    btnPrev.classList.add("lightbox-btn");
    btnNext.classList.add("lightbox-btn");

    btnPrev.textContent = "‹";
    btnNext.textContent = "›";
    btnClose.textContent = "✕";

    lightbox.appendChild(img);
    lightbox.appendChild(btnPrev);
    lightbox.appendChild(btnNext);
    lightbox.appendChild(btnClose);
    document.body.appendChild(lightbox);

    function showImage(index) {
        currentIndex = index;
        img.src = images[currentIndex].src;
        lightbox.classList.add("active");
    }

    images.forEach((image, index) => {
        image.addEventListener("click", () => showImage(index));
    });

    btnPrev.addEventListener("click", (e) => {
        e.stopPropagation();
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    });

    btnNext.addEventListener("click", (e) => {
        e.stopPropagation();
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    });

    btnClose.addEventListener("click", () => {
        lightbox.classList.remove("active");
    });

    lightbox.addEventListener("click", () => {
        lightbox.classList.remove("active");
    });
});
