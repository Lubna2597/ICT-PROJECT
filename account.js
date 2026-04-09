// Dashboard Welcome Text Update
window.addEventListener("DOMContentLoaded", function () {

    // Get the logged-in user's saved data
    const userData = localStorage.getItem("user");
    const user = JSON.parse(userData);

    // Update the dashboard welcome text
    const welcomeText = document.getElementById("dashboardwelcometext");
    welcomeText.innerHTML = `Welcome ${user.name}`;
});
