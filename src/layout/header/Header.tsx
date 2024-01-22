import gsap from "gsap";
import { useContext, useState } from "react";

import { Wrapper, NavigationMenu, Link } from "./Header.styles";

import { HomeLink } from "./HomeLink";
import { NavigationButton } from "./NavigationButton";
import { CursorContext } from "..";

export const Header = () => {
	const { setHovered } = useContext(CursorContext);
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
			<HomeLink scrollToSection={scrollToSection} />

			<NavigationMenu $active={navigationMenuState}>
				<Link
					onMouseEnter={() => setHovered(true)}
					onMouseLeave={() => setHovered(false)}
					onClick={() => {
						closeNavigationMenu();
						scrollToSection("#home-section");
					}}
				>
					Home
				</Link>
				<Link
					onMouseEnter={() => setHovered(true)}
					onMouseLeave={() => setHovered(false)}
					onClick={() => {
						closeNavigationMenu();
						scrollToSection("#specs-section");
					}}
				>
					Specs
				</Link>
				<Link
					onMouseEnter={() => setHovered(true)}
					onMouseLeave={() => setHovered(false)}
					onClick={() => {
						closeNavigationMenu();
						scrollToSection("#case-section");
					}}
				>
					Case
				</Link>
				<Link
					onMouseEnter={() => setHovered(true)}
					onMouseLeave={() => setHovered(false)}
					onClick={() => {
						closeNavigationMenu();
						scrollToSection("#products-section");
					}}
				>
					Products
				</Link>
			</NavigationMenu>

			<NavigationButton onClick={handleNavigationMenu} />
		</Wrapper>
	);
};
