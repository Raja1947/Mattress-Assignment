document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".menu-icon");
  const closeIcon = document.querySelector(".close-icon");
  const mobileNav = document.querySelector(".mobile-nav");
  const body = document.body;

  menuIcon.addEventListener("click", function () {
    mobileNav.classList.add("active");
    menuIcon.style.display = "none";
    closeIcon.style.display = "block";

    // Disable scrolling and add background color
    body.classList.add("menu-open");
  });

  closeIcon.addEventListener("click", function () {
    mobileNav.classList.remove("active");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";

    // Enable scrolling and remove background color
    body.classList.remove("menu-open");
  });

  //////////////   width-increase ////////////////
  const images = document.querySelectorAll(".tips-bottom-in");

  images.forEach((image) => {
    image.addEventListener("click", () => {
      images.forEach((img) => img.classList.remove("active"));
      image.classList.add("active");
    });
  });

  // Initialize Splide Slider
  var splide = new Splide(".splide", {
    pagination: false,
  });

  splide.mount();
});
