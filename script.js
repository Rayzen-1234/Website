// LOGIN HANDLER
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", function(e) {
      e.preventDefault();
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      if (username === "admin" && password === "admin123") {
        alert("Welcome Admin! Redirecting to Admin Dashboard...");
        // window.location.href = "AdminDashboard.html";
      } else if (username === "teacher" && password === "teacher123") {
        alert("Welcome Teacher! Redirecting to Teacher Dashboard...");
        // window.location.href = "TeacherDashboard.html";
      } else {
        alert("Invalid login credentials!");
      }
    });
  }

  // ADMISSION FORM HANDLER
  const admissionForm = document.getElementById("admissionForm");
  if (admissionForm) {
    admissionForm.addEventListener("submit", function(e) {
      e.preventDefault();
      alert("Your admission application has been submitted successfully!");
      admissionForm.reset();
    });
  }
});
