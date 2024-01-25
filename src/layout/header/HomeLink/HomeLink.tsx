/**
 * Footer.tsx
 *
 * This file contains the Footer component of the application.
 *
 * @file This file contains the Footer component of the application.
 * @author [Jose Toro]
 * @date Created on 24-01-2024
 */

import React, { useContext } from "react";

import { CursorContext } from "../../../components/Cursor";
import { HomeLinkProps } from "./HomeLink.types";
import { Wrapper } from "./HomeLink.styles";

import BeatsbyDreLogo from "../../../assets/beatsby-logo.png";

/**
 * `HomeLink` is a component that displays a link to the home section of the page.
 * This component uses the `CursorContext` context to change the cursor state when hovered over.
 * When clicking on the link, it scrolls to the home section of the page.
 *
 * @param {HomeLinkProps} props - The properties of the component.
 * @param {Function} props.scrollToSection - A function that is used to scroll to a specific section of the page.
 *
 * @example
 * ```tsx
 * <HomeLink scrollToSection={(section) => console.log(`Scrolling to ${section}`)} />
 * ```
 *
 * @returns {React.FC<HomeLinkProps>} The `HomeLink` component.
 * @date Created on 24-01-2024
 */
export const HomeLink: React.FC<HomeLinkProps> = ({ scrollToSection }) => {
	const { setHovered } = useContext(CursorContext);

	return (
		<Wrapper>
			<a
				onMouseEnter={() => setHovered(true)}
				onMouseLeave={() => setHovered(false)}
				onClick={() => scrollToSection("#home-section")}
			>
				<img src={BeatsbyDreLogo} draggable="false" alt="Beatsby Logo" />
			</a>
		</Wrapper>
	);
};
