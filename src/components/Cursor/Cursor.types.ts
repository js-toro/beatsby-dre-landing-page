/**
 * Cursor.types.ts
 *
 * This file contains the type definitions for the Cursor component.
 *
 * @file This file contains the type definitions for the Cursor component.
 * @author [Jose Toro]
 * @date Created on 23-01-2023
 */

/**
 * Defines an interface for the cursor context.
 *
 * @property {boolean} hovered - Indicates whether the cursor is over an element.
 * @property {(hovered: boolean) => void} setHovered - Function to set the hovered state.
 * @date Created on 23-01-2023
 */
export interface CursorContextType {
	hovered: boolean;
	setHovered: (hovered: boolean) => void;
}

/**
 * Defines an interface for the cursor properties.
 *
 * @property {React.ReactNode} children - The children of the Cursor component, which can be any React node.
 * @date Created on 23-01-2023
 */
export interface CursorPropsTypes {
	children: React.ReactNode;
}
