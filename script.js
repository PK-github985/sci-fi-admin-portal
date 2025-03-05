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
                // Request fullscreen mode
                if (document.documentElement.requestFullscreen) {
                    await document.documentElement.requestFullscreen();
                } else if (document.documentElement.mozRequestFullScreen) {
                    await document.documentElement.mozRequestFullScreen();
                } else if (document.documentElement.webkitRequestFullscreen) {
                    await document.documentElement.webkitRequestFullscreen();
                } else if (document.documentElement.msRequestFullscreen) {
                    await document.documentElement.msRequestFullscreen();
                }

                // Exit fullscreen before redirecting
                setTimeout(() => {
                    if (document.exitFullscreen) {
                        document.exitFullscreen();
                    } else if (document.mozCancelFullScreen) {
                        document.mozCancelFullScreen();
                    } else if (document.webkitExitFullscreen) {
                        document.webkitExitFullscreen();
                    } else if (document.msExitFullscreen) {
                        document.msExitFullscreen();
                    }

                    // Redirect to local admin access page
                    window.location.href = "/adminacsses";
                }, 300);
            } catch (error) {
                console.warn("Fullscreen request failed:", error);
                window.location.href = "/adminacsses"; // Fallback redirect
            }
        });
    }
});
