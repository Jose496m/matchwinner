var menuItems = document.querySelectorAll(".menu li");

menuItems.forEach(function (menuItem) {
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
