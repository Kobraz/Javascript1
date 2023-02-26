window.addEventListener("load", () => {
    const loader = document.querySelector(".loading");
    loader.classList.add("loader-hidden");
    loader.addEventListener("transitionend", () => {
        document.body.removeChild("loader");
    })
})