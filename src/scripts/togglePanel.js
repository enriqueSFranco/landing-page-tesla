const $menuBtn = document.querySelector('#nav-rigth li:last-child a');
const $main = document.querySelector('main')
const $header = document.getElementById('header')

export function togglePanel (panel, selector) {
  document.addEventListener('click', (e) => {
    if (e.target.matches(selector)) {
      e.preventDefault();
      panel.classList.add('right-0')
      $main.classList.add('blur-sm')
      $header.classList.add('blur-sm')
      panel.classList.remove('-right-full')
      document.body.style.overflow = 'hidden';
    }
  });
}
