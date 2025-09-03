document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");

  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const userType = document.getElementById("userType").value;
      const username = document.getElementById("name").value;
      const password = document.getElementById("password").value;

      // DEMO LOGIN ACCOUNTS
      if (userType === "admin" && username === "admin" && password === "admin123") {
        alert("Welcome Admin! Redirecting to Admin Dashboard...");
        window.location.href = "../AdminDashboard.html"; 
        return;
      }

      if (userType === "teacher" && username === "teacher" && password === "teacher123") {
        alert("Welcome Teacher! Redirecting to Teacher Dashboard...");
        window.location.href = "Dashboards\Teacher\TeacherDashboard.html"; 
        return;
      }

      if (userType === "student") {
        alert("Students must first apply via the Admission System.");
        window.location.href = "Admission/Admission.html";
        return;
      }

      alert("Invalid credentials!");
    });
  }
});
