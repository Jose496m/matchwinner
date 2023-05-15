const parents = document.querySelectorAll(".parent");

parents.forEach((parent) => {
  parent.addEventListener("click", function () {
    this.classList.toggle("active");
  });
});
