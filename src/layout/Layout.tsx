/**
 * Layout.tsx
 *
 * This file defines the Layout component that is used to structure the application.
 * The Layout component includes the Cursor, Header, Home, and Footer.
 *
 * @file This file defines the Layout component.
 * @author [Jose Toro]
 * @date Created on 23-01-2024
 */

import React from 'react';

import { Cursor } from '../components/Cursor';
import { Header } from './header';
import { Home } from './pages/Home';
import { Footer } from './footer';

/**
 * Layout Component
 *
 * This component returns a layout that includes the Cursor, Header, Home, and Footer.
 *
 * @example
 *
 * ```typescript
 * return (
 *   <Layout />
 * )
 * ```
 *
 * @returns {JSX.Element} The layout component.
 * @date Created on 23-01-2024
 */
export const Layout: React.FC = () => {
	return (
		<Cursor>
			<Header />
			<Home />
			<Footer />
		</Cursor>
	);
};
