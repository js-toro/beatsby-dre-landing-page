/**
 * Defines an interface for the cursor context.
 */
export interface CursorContextType {
	/**
	 * Indicates whether the cursor is over an element.
	 */
	hovered: boolean;

	/**
	 * Function to set the hovered state.
	 * @param hovered - The new hovered state.
	 */
	setHovered: (hovered: boolean) => void;
}

/**
 * Defines an interface for the cursor properties.
 */
export interface CursorPropsTypes {
	/**
	 * The children of the Cursor component, which can be any React node.
	 */
	children: React.ReactNode;
}
