/**
 * Home.tsx
 *
 * This file contains the Home component of the application.
 *
 * @file This file contains the Home component of the application.
 * @author [Jose Toro]
 * @date Created on 24-01-2024
 */

import { Hero, Specs, Case, Discount, Products } from ".";

/**
 * Home component that renders the main sections of the application.
 *
 * @returns {JSX.Element} The rendered Home component.
 */
export const Home = () => {
	return (
		<main>
			<Hero />
			<Specs />
			<Case />
			<Discount />
			<Products />
		</main>
	);
};
