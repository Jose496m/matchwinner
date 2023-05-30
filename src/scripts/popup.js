var popupButton = document.getElementById("popup-button");
var popupWindow = document.getElementById("popup-window");
var closeButton = document.getElementById("close-button-popup");

popupButton.addEventListener("click", function () {
  popupButton.style.display = "none";
  popupWindow.style.display = "block";
});

closeButton.addEventListener("click", function () {
  popupButton.style.display = "block";
  popupWindow.style.display = "none";
});
