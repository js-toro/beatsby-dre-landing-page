/**
 * Cursor.animations.ts
 *
 * This file contains the function to animate the cursor to follow mouse movement.
 *
 * @file This file contains the function to animate the cursor to follow mouse movement.
 * @author [Jose Toro]
 * @date Created on 23-01-2024
 */

import { RefObject } from "react";
import gsap from "gsap";

/**
 * This function animates the cursor to follow the mouse movement.
 * @param cursor - The cursor that is going to be animated.
 * @date Created on 23-01-2024
 */
export const animateCursor = (cursor: RefObject<HTMLDivElement>): void => {
	// We center the cursor at the origin point of the mouse
	gsap.set(cursor.current, { xPercent: -50, yPercent: -50 });
	const targets = gsap.utils.toArray(cursor.current);
	// We add a listening event for mouse movement
	window.addEventListener("mousemove", (e) => {
		// We animate the cursor to follow the mouse
		gsap.to(targets, {
			duration: 0.33,
			x: e.clientX,
			y: e.clientY,
			ease: "power1.out",
			overwrite: "auto",
			stagger: 0.02,
		});
	});
};

/**
 * This function animates the size of the cursor when it hovers over an element.
 * @param hovered - If the cursor is hovering over an element.
 * @param cursor - The cursor that is going to be animated.
 * @date Created on 23-01-2024
 */
export const animateCursorScale = (
	hovered: boolean,
	cursor: RefObject<HTMLDivElement>
): void => {
	if (hovered) {
		// If the cursor is hovering over an element, we increase its size
		gsap.to(cursor.current, {
			duration: 0.3,
			scale: 10,
			ease: "power1.out",
		});
	} else {
		// If the cursor is not hovering over an element, we return to its original size
		gsap.to(cursor.current, {
			duration: 0.3,
			scale: 1,
			ease: "power1.out",
		});
	}
};
