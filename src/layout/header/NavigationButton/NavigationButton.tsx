/**
 * NavigationButton.tsx
 *
 * This file contains the Navigation Button component of the application.
 *
 * @file This file contains the Navigation Button component of the application.
 * @author [Jose Toro]
 * @date Created on 25-01-2024
 */

import { useRef } from 'react';

import { NavigationButtonProps } from './NavigationButton.types';
import { Wrapper } from './NavigationButton.styles';
import { handleClick } from './NavigationButton.animations';
import HamburguerIcon from '../../../assets/hamburger-icon.svg';

/**
 * `NavigationButton` is a component that displays a navigation button.
 * This button uses a hamburger icon to represent the navigation menu.
 * When clicking on the button, the click animation is activated and the provided `onClick` function is called.
 *
 * @param {NavigationButtonProps} props - The properties of the component.
 * @param {Function} props.onClick - A function that is called when the button is clicked.
 *
 * @example
 * ```tsx
 * <NavigationButton onClick={() => console.log('Navigation button clicked')} />
 * ```
 *
 * @returns {React.FC<NavigationButtonProps>} The `NavigationButton` component.
 * @date Created on 25-01-2024
 */
export const NavigationButton: React.FC<NavigationButtonProps> = ({
	onClick,
}) => {
	const imageRef = useRef<HTMLImageElement>(null);

	return (
		<Wrapper
			onClick={(event) => {
				onClick(event);
				handleClick(imageRef);
			}}>
			<img
				ref={imageRef}
				draggable="false"
				src={HamburguerIcon}
				alt="Beatsby Hamburger Icon"
			/>
		</Wrapper>
	);
};
