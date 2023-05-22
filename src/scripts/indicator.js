//aplicando delegacion de eventos
/* 	document.addEventListener('mouseenter', (e) => {
  if (e.target.matches('menu-item')) {
    e.preventDefault();
    console.log('encontre un link');
  }
}); */

export function handleIndicator (menuItems, indicator) {
  menuItems.forEach((menuItem) => {
    menuItem.addEventListener('mouseenter', (e) => {
      const { width, height, left, top } = menuItem.getBoundingClientRect();

      Object.entries({ width, height, left, top }).forEach(([key, value]) => {
        indicator.style.setProperty(key, `${value}px`);
      });
      indicator.style.setProperty('opacity', '1');
      indicator.style.setProperty('visibility', 'visible');
    });

    menuItem.addEventListener('mouseleave', () => {
      indicator.style.setProperty('opacity', '0');
      indicator.style.setProperty('visibility', 'hidden');
    });
  });
}

