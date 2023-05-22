/**
 * La función setupIntersectionObserver configura un observador de intersección que controla el color del encabezado
 * en función de la sección que se encuentra en la ventana visible.
 * @param {HTMLElement} header - El elemento de encabezado.
 * @param {HTMLElement[]} sections - Un arreglo de elementos de sección.
 */
export function setupIntersectionObserver (header, sections) {
  /**
   * Actualiza el color del encabezado en función de la intersección de la sección en la ventana visible.
   * @param {IntersectionObserverEntry[]} entries - Las entradas de intersección observadas.
   */
  const updateHeaderColor = ([entry]) => {
    if (entry.isIntersecting) {
      const textColor = entry.target.getAttribute('data-color');
      header.style.setProperty('color', textColor);
    }
  }

  const watcher = new IntersectionObserver(updateHeaderColor, {
    threshold: 0.8,
  });

  sections.forEach((section) => {
    watcher.observe(section);
  });
}