import { useState } from "react";

import {
	Wrapper,
	NavigationMenu,
	NavegationButton,
	Link,
} from "./Header.styles";

import HamburguerIcon from "./assets/hamburger-icon.svg";
import { HomeLink } from "../../components/HomeLink";

import gsap from "gsap";

export const Header = () => {
	const [navigationMenuState, setNavigationMenuState] = useState(false);

	const handleNavigationMenu = () => {
		setNavigationMenuState(!navigationMenuState);
	};

	const closeNavigationMenu = () => {
		setNavigationMenuState(false);
	};

	const scrollToSection = (section: string) => {
		gsap.to(window, {
			duration: 1,
			scrollTo: {
				y: section,
				offsetY: 56,
			},
		});
	};

	return (
		<Wrapper className="container">
			<HomeLink />

			<NavigationMenu $active={navigationMenuState}>
				<Link
					className="link"
					onClick={() => {
						closeNavigationMenu();
						scrollToSection("#home-section");
					}}
				>
					Home
				</Link>
				<Link
					className="link"
					onClick={() => {
						closeNavigationMenu();
						scrollToSection("#specs-section");
					}}
				>
					Specs
				</Link>
				<Link
					className="link"
					onClick={() => {
						closeNavigationMenu();
						scrollToSection("#case-section");
					}}
				>
					Case
				</Link>
				<Link
					className="link"
					onClick={() => {
						closeNavigationMenu();
						scrollToSection("#products-section");
					}}
				>
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
