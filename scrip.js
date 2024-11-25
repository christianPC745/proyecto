
// Obtener elementos
const burgerMenu = document.querySelector('.burger-menu');
const navbarLinks = document.querySelector('.navbar ul');

// Función para alternar la visibilidad del menú
burgerMenu.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});


// Función para ajustar imágenes automáticamente sin tamaños fijos
window.addEventListener('resize', () => {
    const imagenes = document.querySelectorAll('img');
    imagenes.forEach(imagen => {
        imagen.style.width = '100%';  // Ocupa todo el ancho de su contenedor
        imagen.style.height = 'auto'; // Mantiene la proporción
    });
});
