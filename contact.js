
  const patterns = {
    name: /^[A-Za-z\s]{3,}$/,               // at least 3 letters
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,    // email format
    phone: /^\+383\/\d{2}\/\d{3}\/\d{3}$/,   // phone number
    recipe: /^.{2,}$/                       // at least 2 chars
  };

  function showError(input, message) {
    const errorDiv = input.parentElement.querySelector(".error-message");
    if (message) {
      errorDiv.textContent = message;
      errorDiv.style.display = "block";
      input.classList.add("invalid");
      input.classList.remove("valid");
    } else {
      errorDiv.textContent = "";
      errorDiv.style.display = "none";
      input.classList.add("valid");
      input.classList.remove("invalid");
    }
  }

  function validateInput(input, regex, message) {
    if (regex.test(input.value.trim())) {
      showError(input, "");
      return true;
    } else {
      showError(input, message);
      return false;
    }
  }

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const phoneInput = document.getElementById("phone");
  const recipeInput = document.querySelector('input[placeholder="Write your favorite recipe"]');
  const cuisineSelect = document.getElementById("cuisine");

  // Run validation live
  nameInput.addEventListener("input", () =>
    validateInput(nameInput, patterns.name, "Name must be at least 3 letters.")
  );
  emailInput.addEventListener("input", () =>
    validateInput(emailInput, patterns.email, "Enter a valid email address.")
  );
  phoneInput.addEventListener("input", () => {
    if (phoneInput.value.trim() === "") {
      showError(phoneInput, ""); // optional
    } else {
      validateInput(phoneInput, patterns.phone, "Enter a valid phone number.");
    }
  });
  recipeInput.addEventListener("input", () =>
    validateInput(recipeInput, patterns.recipe, "Recipe name must be at least 2 characters.")
  );
  cuisineSelect.addEventListener("change", () => {
    if (cuisineSelect.value) {
      showError(cuisineSelect, "");
    } else {
      showError(cuisineSelect, "Please select a cuisine.");
    }
  });

  // On submit, check ALL fields
  document.querySelector(".contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
    formMessage.textContent = "";
    formMessage.className = "message";

    let valid = true;

    if (!validateInput(nameInput, patterns.name, "Name must be at least 3 letters.")) valid = false;
    if (!validateInput(emailInput, patterns.email, "Enter a valid email address.")) valid = false;
    if (phoneInput.value.trim() && !validateInput(phoneInput, patterns.phone, "Enter a valid phone number.")) valid = false;
    if (!validateInput(recipeInput, patterns.recipe, "Recipe name must be at least 2 characters.")) valid = false;
    if (!cuisineSelect.value) {
      showError(cuisineSelect, "Please select a cuisine.");
      valid = false;
    } else {
      showError(cuisineSelect, "");
    }

    
    if(valid){

      e.target.reset();

      [nameInput, emailInput, phoneInput, recipeInput, cuisineSelect].forEach(el => {
      el.classList.remove("valid", "invalid");
      });
      formMessage.textContent = "✅ Your booking was successful!";
      formMessage.className = "message success";
      formMessage.style.display = "block";
    } else{
      formMessage.textContent = "❌ Please correct the errors above.";
      formMessage.className = "message error";
      formMessage.style.display = "block";
    }
  });

