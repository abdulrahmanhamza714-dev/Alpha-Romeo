// =========================
// INITIALIZE AOS ANIMATIONS
// =========================
AOS.init({
  duration: 1000,
  once: true,
  offset: 100
});


// =========================
// NAVBAR SCROLL EFFECT
// =========================
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    navbar.style.padding = "10px 40px";
    navbar.style.background = "rgba(0,0,0,0.9)";
    navbar.style.borderBottom = "1px solid rgba(212,175,55,0.3)";
  } else {
    navbar.style.padding = "15px 40px";
    navbar.style.background = "rgba(10,10,10,0.7)";
    navbar.style.borderBottom = "1px solid rgba(212,175,55,0.1)";
  }
});


// =========================
// SMOOTH SCROLL FOR NAV LINKS
// =========================
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 70,
        behavior: "smooth"
      });
    }
  });
});


// =========================
// GALLERY LIGHTBOX
// =========================
const galleryItems = document.querySelectorAll(".gallery-item");

const lightbox = document.createElement("div");
lightbox.classList.add("lightbox");
document.body.appendChild(lightbox);

lightbox.innerHTML = `
  <span class="close">&times;</span>
  <img src="" alt="Preview">
`;

const lightboxImg = lightbox.querySelector("img");
const closeBtn = lightbox.querySelector(".close");

galleryItems.forEach(item => {
  item.addEventListener("click", () => {
    const img = item.querySelector("img");
    lightboxImg.src = img.src;
    lightbox.classList.add("active");
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.classList.remove("active");
});

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.classList.remove("active");
  }
});


// =========================
// ACTIVE NAV LINK ON SCROLL
// =========================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;

    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});