document.getElementById("expandForm").addEventListener("submit", function(e) {
    e.preventDefault();
    let valid = true;

    // Reset errors & styles
    document.querySelectorAll(".error").forEach(el => el.textContent = "");
    document.querySelectorAll("input, textarea, select").forEach(el => el.classList.remove("invalid"));
    document.getElementById("successMsg").textContent = "";

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let type = document.getElementById("type").value;
    let details = document.getElementById("details").value.trim();

    if (!/^[a-zA-Z\s]+$/.test(name) || name.length < 2) {
      document.getElementById("nameError").textContent = "Enter a valid name (letters only, min 2 chars).";
      document.getElementById("name").classList.add("invalid");
      valid = false;
    }

    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      document.getElementById("emailError").textContent = "Enter a valid email address.";
      document.getElementById("email").classList.add("invalid");
      valid = false;
    }

    if (type === "") {
      document.getElementById("typeError").textContent = "Please select what you’re recommending.";
      document.getElementById("type").classList.add("invalid");
      valid = false;
    }

    if (details.length < 10) {
      document.getElementById("detailsError").textContent = "Details must be at least 10 characters.";
      document.getElementById("details").classList.add("invalid");
      valid = false;
    }

    if (valid) {
      document.getElementById("successMsg").textContent = "Thank you for your suggestion! 🙌";
      document.getElementById("expandForm").reset();
    }
  });