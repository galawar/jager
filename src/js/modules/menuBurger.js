export const menuBurger = (openClass) => {
	const body = document.body;
	const burger = document.querySelector('.menu-burger');

	if (burger) {
		burger.addEventListener('click', (e) => {
			e.preventDefault();

			if (burger.classList.contains(openClass)) {
				body.classList.remove('menu-open');
				burger.classList.remove(openClass);
				burger.setAttribute('aria-expanded', false);
			} else {
				body.classList.add('menu-open');
				burger.classList.add(openClass);
				burger.setAttribute('aria-expanded', true);
			}
		})
	}
}