import gsap from "gsap";

export const scrollToSection = (section: string) => {
	gsap.to(window, {
		duration: 1,
		scrollTo: {
			y: section,
			offsetY: 56,
		},
	});
};
