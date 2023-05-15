document.addEventListener("click", function (event) {
  var clickedElement = event.target;
  var dropdownMenus = document.querySelectorAll(".submenu");

  dropdownMenus.forEach(function (submenu) {
    var menuItem = submenu.parentNode;
    if (menuItem.contains(clickedElement)) {
      // Klikket inden for dropdown-menuen eller dens forældrelementer, intet skal gøres
    } else {
      // Klikket uden for dropdown-menuen, skjul den
      submenu.style.display = "none";
    }
  });
});

document.querySelectorAll(".menu li").forEach(function (menuItem) {
  menuItem.addEventListener("click", function (event) {
    event.stopPropagation();
    var submenu = this.querySelector(".submenu");
    submenu.style.display = "block";
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
