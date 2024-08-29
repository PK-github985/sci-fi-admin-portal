document.addEventListener('DOMContentLoaded', () => {
    const welcomeCircle = document.getElementById('welcome-circle');
    const portal = document.getElementById('portal');

    // Show the portal when the welcome circle is clicked
    welcomeCircle.addEventListener('click', () => {
        portal.style.display = 'flex';
    });
});
