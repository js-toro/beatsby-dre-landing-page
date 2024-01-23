import gsap from "gsap";
import { Breakpoints } from "../../../../styles";

export const animateHeadingTextOut = (span: string) => {
	if (!window.matchMedia(`(max-width: ${Breakpoints.laptop.small})`).matches)
		gsap.to(span, {
			text: `Beats 3`,
			ease: "none",
			duration: 1,
			delay: 1,
			onComplete: () => animateHeadingText(span),
		});
	else {
		gsap.set(span, {
			text: "Beats 3",
		});
	}
};

export const animateHeadingText = (span: string) => {
	gsap.to(span, {
		text: "Beat The World!",
		ease: "none",
		duration: 1,
		delay: 3,
		onComplete: () => animateHeadingTextOut(span),
	});
};

export const imageAnimationDelay = 3;
export const imageAnimationDuration = 0.25;
export const imageDisplacement = -100;

export const animateImage = (imageElements: HTMLImageElement[]) => {
	imageElements.forEach((image, index) => {
		gsap.to(image, {
			y: 0,
			duration: imageAnimationDuration,
			delay: index * imageAnimationDuration,
			onComplete: () => animateImageOut(image),
		});
	});
};

export const animateImageOut = (image: HTMLImageElement) => {
	gsap.to(image, {
		x: imageDisplacement,
		duration: imageAnimationDuration,
		delay: imageAnimationDelay,
		onComplete: () => resetImagePosition(image),
	});
};

export const resetImagePosition = (image: HTMLImageElement) => {
	gsap.set(image, { x: 0, y: imageDisplacement });
	animateImage([image]);
};
