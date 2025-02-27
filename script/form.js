
//form submission
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const submitButton = document.getElementById("submitButton");
    submitButton.disabled = true;
    submitButton.innerHTML = `<span class="spinner-border spinner-border-sm"></span> Sending...`;

    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      message: document.getElementById("message").value,
    };

    fetch(
      "https://script.google.com/macros/s/AKfycbwMZ9fwoP4S7P5X11yjqfU_j9taY4p43euO0kQ2lp9RfuGxXzB4aAEfLsZ1TClbR2ypqg/exec",
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
