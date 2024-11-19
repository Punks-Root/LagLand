document.addEventListener('DOMContentLoaded', () => {
    // Obtener el enlace de "Inicio"
    const homeLink = document.getElementById('home-link');
    
    // Verificar si estamos en la página 'index.html'
    if (window.location.pathname === '/index.html' || window.location.pathname === '/') {
        // Ocultar el botón de "Inicio" si estamos en la página principal
        homeLink.style.display = 'none';
    }
});
