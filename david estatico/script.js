function toggleMenu(){
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("active");
}

let currentIndex = 0;

function showNextText() {
  const items = document.querySelectorAll('.carrusel-item');
  currentIndex = (currentIndex + 1) % items.length;
  document.querySelector('.carrusel-text').style.transform = `translateX(${-currentIndex * 100}%)`;
}

setInterval(showNextText, 3000);


  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect(); // Obtiene las coordenadas del elemento
    return rect.top <= window.innerHeight && rect.bottom >= 0; // Verifica si el elemento está dentro del área visible
  }

  // Función para manejar el scroll y mostrar los elementos
  function handleScroll() {
    const elements = document.querySelectorAll('.hidden');
    elements.forEach(element => {
      if (isElementInViewport(element)) {
        element.classList.add('visible'); // Añade la clase visible cuando el elemento es visible
      } else {
        element.classList.remove('visible');
      }
    });
  }

  // Escuchar el evento de scroll
  window.addEventListener('scroll', handleScroll);

  // Llamar a handleScroll al cargar la página para detectar elementos ya visibles
  handleScroll();
