const menuBtn = document.getElementById("menu-btn");
const links = document.getElementById("links");
const bookBtn = document.getElementById("Book-btn");
menuBtn.addEventListener("click", () => {
  links.classList.toggle("active");
  bookBtn.classList.toggle("active");
});
