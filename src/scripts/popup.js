var showMoreButton = document.getElementById("show-more-button");
var overlay = document.getElementById("overlay");
var popupWindow = document.getElementById("popup-window");
var closeButton = document.getElementById("close-button");

showMoreButton.addEventListener("click", function () {
  overlay.style.display = "block";
  popupWindow.style.display = "block";
});

closeButton.addEventListener("click", function () {
  overlay.style.display = "none";
  popupWindow.style.display = "none";
});
