/**
 * NavigationButton.animations.ts
 *
 * This file contains the animation definitions for the Navigation Button component.
 *
 * @file This file contains the animation definitions for the Navigation Button component.
 * @author [Jose Toro]
 * @date Created on 25-01-2024
 */

import gsap from 'gsap';
import { RefObject } from 'react';

/**
 * `handleClick` is a function that animates a 360-degree rotation on the referenced image element.
 * It uses the GSAP library for the animation.
 * The animation has a duration of 0.5 seconds.
 * Upon completion of the animation, the rotation of the image element is reset to 0.
 *
 * @param {RefObject<HTMLImageElement>} imageRef - A reference to the image element to be animated.
 * @date Created on 25-01-2024
 */
export const handleClick = (imageRef: RefObject<HTMLImageElement>) => {
	gsap.to(imageRef.current, {
		duration: 0.5,
		rotation: 360,
		onComplete: () => {
			gsap.set(imageRef.current, { rotation: 0 });
		},
	});
};
