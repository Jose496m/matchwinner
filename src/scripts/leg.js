document.querySelectorAll(".menu li").forEach(function (menuItem) {
  menuItem.addEventListener("click", function () {
    var submenu = this.querySelector(".submenu");
    if (submenu.style.display === "block") {
      submenu.style.display = "none";
    } else {
      submenu.style.display = "block";
    }
  });
});

document.querySelectorAll(".menu li").forEach(function (menuItem) {
  menuItem.addEventListener("click", function (event) {
    event.stopPropagation();
    var submenu = this.querySelector(".submenu");
    submenu.style.display = "block";

    // Rul til menuen
    var menuOffsetTop = menuItem.offsetTop;
    window.scrollTo({
      top: menuOffsetTop,
      behavior: "smooth",
    });
  });
});
