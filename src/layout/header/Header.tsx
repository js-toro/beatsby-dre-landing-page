import { useState } from "react";

import {
	Wrapper,
	NavigationMenu,
	NavegationButton,
	Link,
} from "./Header.styles";

import HamburguerIcon from "./assets/hamburger-icon.svg";
import { HomeLink } from "../../components/HomeLink";

export const Header = () => {
	const [navigationMenuState, setNavigationMenuState] = useState(false);

	const handleNavigationMenu = () => {
		setNavigationMenuState(!navigationMenuState);
	};

	const closeNavigationMenu = () => {
		setNavigationMenuState(false);
	};

	return (
		<Wrapper className="container">
			<HomeLink />

			<NavigationMenu $active={navigationMenuState}>
				<Link href="#home-section" onClick={closeNavigationMenu}>
					Home
				</Link>
				<Link href="#specs-section" onClick={closeNavigationMenu}>
					Specs
				</Link>
				<Link href="#case-section" onClick={closeNavigationMenu}>
					Case
				</Link>
				<Link href="#products-section" onClick={closeNavigationMenu}>
					Products
				</Link>
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
