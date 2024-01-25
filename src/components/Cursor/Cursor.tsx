/**
 * Cursor.tsx
 *
 * This file contains the Cursor component, which provides a custom cursor for the application.
 * It uses the useEffect hook to animate the cursor and change its scale when the mouse hovers over certain elements.
 *
 * @file This file contains the Cursor component, which provides a custom cursor for the application.
 * @author [Jose Toro]
 * @date Created on 23-01-2024
 */

import React, { useEffect, useRef, useState } from "react";
import { isMobile } from "react-device-detect";

import { CursorPropsTypes } from "./Cursor.types";
import { CursorContext } from "./Cursor.context";
import { Ball, Wrapper } from "./Cursor.styles";
import { animateCursor, animateCursorScale } from "./Cursor.animations";

/**
 * Cursor is a React component that provides a custom cursor for the application.
 * It uses the useEffect hook to animate the cursor and change its scale when the mouse hovers over certain elements.
 *
 * @param {React.PropsWithChildren<CursorPropsTypes>} props - The props passed to the Cursor component.
 * @param {React.ReactNode} props.children - The child elements to be rendered within the Cursor component.
 *
 * @example
 * ```typescript
 * return (
 *		<Cursor>
 *			// your children ...
 *		</Cursor>
 * )
 * ```
 *
 * @returns {React.ReactElement} Returns a CursorContext context provider that wraps the children and the custom cursor.
 * @date Created on 23-01-2024
 */
export const Cursor: React.FC<CursorPropsTypes> = ({ children }) => {
	// State to know if the cursor is over an interactive element.
	const [hovered, setHovered] = useState(false);
	// Reference to the DOM element representing the cursor.
	const cursor = useRef<HTMLDivElement>(null);

	// Effect to animate the cursor and change its scale when the mouse hovers over certain elements.
	useEffect(() => {
		animateCursor(cursor);
		animateCursorScale(hovered, cursor);
	}, [hovered]);

	return (
		// Context provider that allows child components to change the hovered state.
		<CursorContext.Provider value={{ hovered, setHovered }}>
			{/* Render the custom cursor only if the device is not mobile. */}
			{!isMobile && (
				<Wrapper>
					<Ball ref={cursor} />
				</Wrapper>
			)}
			{/* Render the child elements. */}
			{children}
		</CursorContext.Provider>
	);
};
