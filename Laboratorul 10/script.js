const target = document.querySelector("#target");
const dropdown = document.querySelector(".dropdown");

target.addEventListener("click", function () {
  dropdown.classList.toggle("active");
});
