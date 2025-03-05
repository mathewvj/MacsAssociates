//form submission
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    document
      .querySelectorAll(".error-message")
      .forEach((el) => (el.innerHTML = ""));
    let isValid = true;

    //get input values
    const nameInput = document.getElementById("name").value.trim();
    const emailInput = document.getElementById("email").value.trim();
    const phoneInput = document.getElementById("phone").value.trim();
    const messageInput = document.getElementById("message").value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+\d{1,4}\s?\d{7,14}$/;

    //validate name
    if (nameInput.length < 2) {
      showError("nameError", "Name must be at least 2 characters");
      isValid = false;
    }

    //validate email
    if (!emailRegex.test(emailInput)) {
      showError("emailError", "Enter a valid email address");
      isValid = false;
    }

    if (!phoneRegex.test(phoneInput)) {
      showError(
        "phoneError",
        "Enter a valid phone number with country code (e.g: +971 123456789)"
      );
      isValid = false;
    }

    if (messageInput.length < 10) {
      showError("messageError", "Message must be at least 10 characters");
      isValid = false;
    }

    if (!isValid) {
      return;
    }

    const submitButton = document.getElementById("submitButton");
    submitButton.disabled = true;
    submitButton.innerHTML = `<span class="spinner-border spinner-border-sm"></span> Sending...`;

    const formData = {
      name: nameInput,
      email: emailInput,
      phone: phoneInput,
      service: document.getElementById("service").value,
      message: messageInput,
    };

    fetch(
      "https://script.google.com/macros/s/AKfycbwznskeMi-hM5SjMI2p8hrf6f6LGGE_4mbOPSkvIX8l6ynBw9Im5NSFlOd4TGZFG57a/exec",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
        mode: "no-cors",
      }
    )
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Message Submitted!",
          text: "Our team will reach out to you shortly",
          confirmButtonColor: "#3085d6",
        });
        document.getElementById("contactForm").reset();
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong! Please try again.",
          confirmButtonColor: "#d33",
        });
        console.error("Error:", error);
      })
      .finally(() => {
        submitButton.disabled = false;
        submitButton.innerHTML = "Submit";
      });
  });

function showError(elementId, message) {
  document.getElementById(elementId).innerHTML = message;
}
