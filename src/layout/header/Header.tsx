import { useState } from "react";

import {
	Wrapper,
	HomeLink,
	NavigationMenu,
	NavegationButton,
	Link,
} from "./Header.styles";

import BeatsbyDreLogo from "./assets/beatsby-logo.png";
import HamburguerIcon from "./assets/hamburger-icon.svg";

export const Header = () => {
	const [navigationMenuState, setNavigationMenuState] = useState(false);

	const handleNavigationMenu = () => {
		setNavigationMenuState(!navigationMenuState);
	};

	return (
		<Wrapper className="container">
			<HomeLink>
				<a href="#">
					<img draggable="false" src={BeatsbyDreLogo} alt="Beatsby Logo" />
				</a>
			</HomeLink>

			<NavigationMenu $active={navigationMenuState}>
				<Link href="#home-section">Home</Link>
				<Link href="#specs-section">Specs</Link>
				<Link href="#case-section">Case</Link>
				<Link href="#products-section">Products</Link>
			</NavigationMenu>

			<NavegationButton onClick={handleNavigationMenu}>
				<img
					draggable="false"
					src={HamburguerIcon}
					alt="Beatsby Hamburger Icon"
				/>
			</NavegationButton>
		</Wrapper>
	);
};
