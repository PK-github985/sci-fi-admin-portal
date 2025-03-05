document.addEventListener("DOMContentLoaded", () => {
    const welcomeCircle = document.getElementById("welcome-circle");
    const portal = document.getElementById("portal");
    const loginForm = document.getElementById("login-form");

    if (welcomeCircle && portal) {
        welcomeCircle.addEventListener("click", () => {
            portal.style.display = "flex";
        });
    }

    if (loginForm) {
        loginForm.addEventListener("submit", async (event) => {
            event.preventDefault(); // Prevent default form submission

            try {
                // Function to request fullscreen mode
                async function requestFullScreen() {
                    if (document.documentElement.requestFullscreen) {
                        await document.documentElement.requestFullscreen();
                    } else if (document.documentElement.mozRequestFullScreen) {
                        await document.documentElement.mozRequestFullScreen();
                    } else if (document.documentElement.webkitRequestFullscreen) {
                        await document.documentElement.webkitRequestFullscreen();
                    } else if (document.documentElement.msRequestFullscreen) {
                        await document.documentElement.msRequestFullscreen();
                    }
                }

                // Request fullscreen before redirecting
                await requestFullScreen();

                // Redirect while staying in fullscreen mode
                setTimeout(() => {
                    window.location.href = "https://pk-github985.github.io/sci-fi-admin-portal/adminacsses.html";
                }, 300);
            } catch (error) {
                console.warn("Fullscreen request failed:", error);
                window.location.href = "https://pk-github985.github.io/sci-fi-admin-portal/adminacsses.html"; // Fallback redirect
            }
        });
    }
});
