import gsap from 'gsap';

export const animateDiscountWrapper = () => {
	gsap.set('.discount-wrapper', { opacity: 0, y: 100 });

	gsap.to('.discount-wrapper', {
		opacity: 1,
		y: 0,
		ease: 'none',
		scrollTrigger: {
			trigger: '.discount-wrapper',
			start: 'center 100%',
			end: 'center 70%',
			scrub: true,
		},
	});
};

export const animateDiscount = () => {
	gsap.set('.discount', { text: 'A big discount awaits you!' });
	gsap.to('.discount', {
		text: 'Buy Now, up to 40% off.',
		ease: 'none',
		scrollTrigger: {
			trigger: '.discount',
			start: 'center 80%',
			end: 'center 60%',
			scrub: true,
		},
	});
};
