import gsap from 'gsap';

export const animateTitle = () => {
	gsap.to('.title', {
		opacity: 1,
		y: 0,
		ease: 'none',
		scrollTrigger: {
			trigger: '.title',
			start: 'center 100%',
			end: 'center 50%',
			scrub: true,
		},
	});
};

export const animateSpecs = (specElements: HTMLDivElement[]) => {
	specElements.forEach((text) => {
		gsap.to(text, {
			opacity: 1,
			x: 0,
			ease: 'none',
			scrollTrigger: {
				trigger: text,
				start: 'center 100%',
				end: 'center 80%',
				scrub: true,
			},
		});
	});
};

export const animateImage = () => {
	gsap.to('.image', {
		y: -25,
		duration: 7,
		repeat: -1,
		yoyo: true,
		ease: 'none',
	});

	gsap.to('.image img', {
		opacity: 1,
		ease: 'none',
		scrollTrigger: {
			trigger: '.image',
			start: 'center 100%',
			end: 'center 70%',
			scrub: true,
		},
	});
};
