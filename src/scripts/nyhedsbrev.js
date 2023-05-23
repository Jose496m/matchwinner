document.addEventListener("DOMContentLoaded", function () {
  var newsletter = document.getElementById("newsletter");
  var closeButton = document.getElementById("close-newsletter");
  var newsletterForm = document.getElementById("newsletter-form");

  // Vis nyhedsbrevet efter 2 sekunders forsinkelse
  setTimeout(function () {
    newsletter.style.display = "block";
  }, 2000);

  // Skjul nyhedsbrevet, når lukknappen klikkes
  closeButton.addEventListener("click", function () {
    newsletter.style.display = "none";
  });

  // Submit-formularen og skjul nyhedsbrevet
  newsletterForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Forhindrer formen i at blive sendt

    // Tilmeldingslogikken kan tilføjes her
    // F.eks. kan du hente e-mailadressen fra inputfeltet og udføre en handling

    var emailInput = document.querySelector(
      '#newsletter-form input[type="email"]'
    );
    var email = emailInput.value;

    // Eksempel: Udskriv e-mailadressen i konsollen
    console.log("Tilmeldt nyhedsbrev: " + email);

    // Skjul nyhedsbrevet efter tilmelding
    newsletter.style.display = "none";
  });
});
