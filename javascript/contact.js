const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const submitButton = document.getElementById("submitButton");

// Function to check if all fields are filled
function checkFields() {
  if (nameInput.value.trim() !== "" && emailInput.value.trim() !== "") {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}

// Add event listeners to form fields
nameInput.addEventListener("input", checkFields);
emailInput.addEventListener("input", checkFields);

// Add event listener to the form's submit event
form.addEventListener("submit", onSubmitForm);

function onSubmitForm(event) {
  // Prevent the default form submission
  event.preventDefault();
  //Create a form data
  const formData = new FormData(event.target);
  // Get form field values
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  // Display form values in an alert
  const outputMessage = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
  console.log(outputMessage);
  alert(outputMessage);
}
