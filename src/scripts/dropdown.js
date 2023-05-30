const dropdownHeaders = document.querySelectorAll(".dropdown-header");
dropdownHeaders.forEach((header) => {
  header.addEventListener("click", () => {
    header.classList.toggle("active");
  });
});
