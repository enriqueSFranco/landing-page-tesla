const $header = document.getElementById('header');
const $sections = document.querySelectorAll('#section');


function setupIntersectionObserver (header, sections) {
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

setupIntersectionObserver($header, $sections)