import { menuBurger } from './modules/menuBurger.js';

window.addEventListener('DOMContentLoaded', (e) => {
	console.log('DOM fully loaded and parsed');

	menuBurger('menu-burger--open');
});