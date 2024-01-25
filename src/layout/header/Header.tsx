import { useContext, useState } from 'react';

import { CursorContext } from '../../components/Cursor';
import { Wrapper, NavigationMenu, Link } from './Header.styles';
import { scrollToSection } from './Header.animations';

import { HomeLink } from './HomeLink';
import { NavigationButton } from './NavigationButton';

export const Header = () => {
	const { setHovered } = useContext(CursorContext);
	const [navigationMenuState, setNavigationMenuState] = useState(false);

	const handleNavigationMenu = () => {
		setNavigationMenuState(!navigationMenuState);
	};

	const closeNavigationMenu = () => {
		setNavigationMenuState(false);
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
						scrollToSection('#home-section');
					}}>
					Home
				</Link>
				<Link
					onMouseEnter={() => setHovered(true)}
					onMouseLeave={() => setHovered(false)}
					onClick={() => {
						closeNavigationMenu();
						scrollToSection('#specs-section');
					}}>
					Specs
				</Link>
				<Link
					onMouseEnter={() => setHovered(true)}
					onMouseLeave={() => setHovered(false)}
					onClick={() => {
						closeNavigationMenu();
						scrollToSection('#case-section');
					}}>
					Case
				</Link>
				<Link
					onMouseEnter={() => setHovered(true)}
					onMouseLeave={() => setHovered(false)}
					onClick={() => {
						closeNavigationMenu();
						scrollToSection('#products-section');
					}}>
					Products
				</Link>
			</NavigationMenu>

			<NavigationButton onClick={handleNavigationMenu} />
		</Wrapper>
	);
};
