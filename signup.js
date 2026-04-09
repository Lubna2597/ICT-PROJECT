let form = document.getElementById("box12");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let userData = {
        name: name,
        username: username,
        password: password
    };

    // save using email as key
    localStorage.setItem(username, JSON.stringify(userData));

    // redirect to login page
    window.location.href = "login.html";
});
