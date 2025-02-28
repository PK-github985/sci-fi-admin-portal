document.addEventListener("DOMContentLoaded", () => {
    const welcomeCircle = document.getElementById("welcome-circle");
    const portal = document.getElementById("portal");
    const loginForm = document.getElementById("login-form");

    // Show the portal when the welcome circle is clicked
    welcomeCircle.addEventListener("click", () => {
        portal.style.display = "flex";
    });

    // Handle login form submission and trigger fullscreen mode
    loginForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent default form submission

        // Try to enter fullscreen mode
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) { // Firefox
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) { // Chrome, Safari and Opera
            document.documentElement.webkitRequestFullscreen();
        } else if (document.documentElement.msRequestFullscreen) { // IE/Edge
            document.documentElement.msRequestFullscreen();
        }

        // Submit the form after entering fullscreen
        loginForm.submit();
    });
});
