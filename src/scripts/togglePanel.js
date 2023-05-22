/**
 * La función togglePanel se encarga de alternar la visibilidad de un panel en la interfaz 
 * de usuario cuando se hace clic en un selector específico.
 * @param {HTMLElement} panel - El panel que se mostrará u ocultará.
 * @param {string} selector - El botón o elemento que activará el panel.
 */
export function togglePanel (panel, selector) {
  const $main = document.querySelector('main')
  const $header = document.getElementById('header')

  const openPanel = () => {
    panel.classList.add('right-0')
    panel.classList.remove('-right-full')
    document.body.style.overflow = 'hidden';
    $header.classList.add('blur-sm')
    $main.classList.add('blur-sm')
  }

  const closePanel = () => {
    panel.classList.remove('right-0');
    panel.classList.add('-right-full');
    $main.classList.remove('blur-sm');
    $header.classList.remove('blur-sm');
    document.body.style.overflow = 'visible';
  }


  document.addEventListener('click', (e) => { // delegacion de eventos
    if (e.target.matches(selector)) { // Si hace clic en el botón de menu entonces abrimos el panel
      e.preventDefault();
      openPanel()
    } else if (e.target.matches('#close-btn') || e.target.matches('#close-btn *')) { // Si se hace clic en el botón de cierre
      e.preventDefault()
      closePanel()
    }
  });
}
