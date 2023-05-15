document.querySelectorAll(".menu li").forEach(function (menuItem) {
  var submenu = menuItem.querySelector(".submenu");

  menuItem.addEventListener("click", function (event) {
    event.stopPropagation();

    if (submenu.style.display === "block") {
      submenu.style.display = "none";
    } else {
      submenu.style.display = "block";
    }
  });

  submenu.addEventListener("click", function (event) {
    event.stopPropagation();
  });
});

document.addEventListener("click", function () {
  var dropdownMenus = document.querySelectorAll(".submenu");

  dropdownMenus.forEach(function (submenu) {
    submenu.style.display = "none";
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
