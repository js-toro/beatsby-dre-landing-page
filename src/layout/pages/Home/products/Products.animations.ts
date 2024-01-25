import gsap from 'gsap';

export const animateProductsTitle = () => {
	gsap.set('.products-title', { opacity: 0, y: 100 });

	gsap.to('.products-title', {
		opacity: 1,
		y: 0,
		ease: 'none',
		scrollTrigger: {
			trigger: '.products-title',
			start: 'bottom 100%',
			end: 'bottom 50%',
			scrub: true,
		},
	});
};

export const animateProduct = () => {
	gsap.set('.product', { opacity: 0 });

	gsap.to('.product', {
		opacity: 1,
		ease: 'none',
		scrollTrigger: {
			trigger: '.product',
			start: 'bottom 100%',
			end: 'bottom 50%',
			scrub: true,
		},
	});
};

export const animateProductImage = (productImage: HTMLImageElement[]) => {
	productImage.forEach((image, index) => {
		gsap.to(image, {
			yoyo: true,
			repeat: -1,
			duration: 3,
			y: 10,
			delay: index * 0.3,
			ease: 'none',
		});
	});
};
