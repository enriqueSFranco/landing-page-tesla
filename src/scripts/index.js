import { togglePanel } from './togglePanel';
import { handleIndicator } from './indicator';
import { setupIntersectionObserver } from './intersectionObserver'

togglePanel(document.getElementById('panel'), '#nav-rigth li:last-child a');
handleIndicator(document.querySelectorAll('#menu-item'), document.getElementById('indicator'))
setupIntersectionObserver(document.getElementById('header'), document.querySelectorAll('#section'))


console.log('index')