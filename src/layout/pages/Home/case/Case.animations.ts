import gsap from 'gsap';

export const animateTitle = () => {
	gsap.set('.case-title', { opacity: 0, y: 100 });

	gsap.to('.case-title', {
		opacity: 1,
		y: 0,
		ease: 'none',
		scrollTrigger: {
			trigger: '.case-title',
			start: 'center 100%',
			end: 'center 50%',
			scrub: true,
		},
	});
};

export const animateCaseInfo = () => {
	gsap.set('.case-info', { opacity: 0, x: 100 });

	gsap.to('.case-info', {
		opacity: 1,
		x: 0,
		ease: 'none',
		scrollTrigger: {
			trigger: '.case-info',
			start: 'center 100%',
			end: 'center 70%',
			scrub: true,
		},
	});
};

export const animateCaseImage = () => {
	gsap.set('.case-image', { opacity: 0 });

	gsap.to('.case-image', {
		opacity: 1,
		ease: 'none',
		scrollTrigger: {
			trigger: '.case-image',
			start: 'center 100%',
			end: 'center 50%',
			scrub: true,
		},
	});
};

export const animateOnButtonEnter = () => {
	gsap.to('.more-info-text', {
		text: 'You like it',
		duration: 0.3,
		ease: 'none',
	});
};

export const animateOnButtonExit = () => {
	gsap.to('.more-info-text', {
		text: 'More info',
		duration: 0.3,
		ease: 'none',
	});
};
