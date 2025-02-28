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
            event.preventDefault(); // Prevent immediate form submission

            try {
                if (document.documentElement.requestFullscreen) {
                    await document.documentElement.requestFullscreen();
                } else if (document.documentElement.mozRequestFullScreen) {
                    await document.documentElement.mozRequestFullScreen();
                } else if (document.documentElement.webkitRequestFullscreen) {
                    await document.documentElement.webkitRequestFullscreen();
                } else if (document.documentElement.msRequestFullscreen) {
                    await document.documentElement.msRequestFullscreen();
                }

                // Exit fullscreen before submitting the form
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

                    loginForm.submit(); // Submit after exiting fullscreen
                }, 300); // Short delay to ensure smooth transition
            } catch (error) {
                console.warn("Fullscreen request failed:", error);
                loginForm.submit(); // Fallback: Submit even if fullscreen fails
            }
        });
    }
});
