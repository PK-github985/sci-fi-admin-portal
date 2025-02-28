document.addEventListener("DOMContentLoaded", () => {
    const welcomeCircle = document.getElementById("welcome-circle");
    const portal = document.getElementById("portal");
    const loginForm = document.getElementById("login-form");

    if (welcomeCircle && portal) {
        // Show the portal when the welcome circle is clicked
        welcomeCircle.addEventListener("click", () => {
            portal.style.display = "flex";
        });
    }

    if (loginForm) {
        // Handle login form submission and trigger fullscreen mode
        loginForm.addEventListener("submit", (event) => {
            event.preventDefault(); // Prevent default form submission

            // Try to enter fullscreen mode
            const enterFullscreen = () => {
                if (document.documentElement.requestFullscreen) {
                    return document.documentElement.requestFullscreen();
                } else if (document.documentElement.mozRequestFullScreen) { // Firefox
                    return document.documentElement.mozRequestFullScreen();
                } else if (document.documentElement.webkitRequestFullscreen) { // Chrome, Safari and Opera
                    return document.documentElement.webkitRequestFullscreen();
                } else if (document.documentElement.msRequestFullscreen) { // IE/Edge
                    return document.documentElement.msRequestFullscreen();
                } else {
                    return Promise.resolve(); // If fullscreen is not supported, continue normally
                }
            };

            enterFullscreen().then(() => {
                setTimeout(() => {
                    loginForm.submit(); // Submit the form after fullscreen is triggered
                }, 500); // Small delay to ensure fullscreen mode is activated
            }).catch((error) => {
                console.warn("Fullscreen mode not supported or blocked by the browser", error);
                loginForm.submit(); // Fallback: Submit the form if fullscreen fails
            });
        });
    }
});
