/**
 * NavigationButton.styles.ts
 *
 * This file contains the style definitions for the Navigation Button component.
 * `styled-components` is used to create a styled button component.
 *
 * @file This file contains the style definitions for the Navigation Button component.
 * @author [Jose Toro]
 * @date Created on 25-01-2024
 */

import styled from 'styled-components';
import { Breakpoints } from '../../../styles';

/**
 * `Wrapper` is a styled component that defines a button.
 * This button has a width that fits its content, has no border or background,
 * and is hidden on screens with a width greater than `Breakpoints.tablet.medium`.
 * When hovered over, the cursor becomes a pointer.
 * The image inside the button has a width and height of 32px, and its opacity changes with a transition when hovered over.
 *
 * @returns {JSX.Element} The layout component.
 * @date Created on 25-01-2024
 */
export const Wrapper = styled.button`
	justify-self: end;
	width: fit-content;
	border: none;
	background-color: transparent;
	z-index: 12;

	&:hover {
		cursor: pointer;
	}

	img {
		width: 32px;
		height: 32px;
		filter: opacity(1);
		translate: filter 0.3s ease;
	}

	@media (min-width: ${Breakpoints.tablet.medium}) {
		display: none;
	}
`;
