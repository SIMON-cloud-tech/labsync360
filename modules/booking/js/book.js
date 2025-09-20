document.getElementById("bookingForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const classRep = document.getElementById("classRep").value.trim();
  const school = document.getElementById("school").value.trim();
  const programme = document.getElementById("programme").value.trim();
  const unit = document.getElementById("unit").value.trim();
  const time = document.getElementById("time").value;
  const equipments = document.getElementById("equipments").value.trim();

  const errorMessage = document.getElementById("errorMessage");
  const successMessage = document.getElementById("successMessage");

  errorMessage.textContent = "";
  successMessage.textContent = "";

  if (!classRep || !school || !programme || !unit || !time || !equipments) {
    errorMessage.textContent = "Please fill in all fields before submitting.";
    return;
  }
    // Simulate successful submission
  successMessage.textContent = "Booking submitted successfully!";
  this.reset();
});
