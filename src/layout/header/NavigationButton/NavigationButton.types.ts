/**
 * NavigationButton.types.ts
 *
 * This file contains the type definitions for the Navigation Button component.
 *
 * @file This file contains the type definitions for the Navigation Button component.
 * @author [Jose Toro]
 * @date Created on 25-01-2024
 */

import { MouseEvent } from 'react';

/**
 * `NavigationButtonProps` defines the properties that can be passed to the `NavigationButton` component.
 *
 * @property {Function} onClick - A function that is called when the button is clicked. It receives the mouse event as an argument.
 * @date Created on 25-01-2024
 */
export interface NavigationButtonProps {
	onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}
