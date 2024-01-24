/**
 * App.tsx
 *
 * This file defines the main component of the application.
 *
 * @file This file defines the main component of the application.
 * @author [Jose Toro]
 * @date Created on 23-01-2023
 */

import { GlobalStyle } from "./styles";
import { Layout } from "./layout";

/**
 * App Component.
 *
 * This is the main component of the application.
 * It wraps the application with the global styles and the layout.
 *
 * @returns {JSX.Element} The App component with the global styles and the layout.
 * @date Created on 23-01-2023
 */
const App = () => {
	return (
		<>
			<GlobalStyle />
			<Layout />
		</>
	);
};

/**
 * Exports the App component as default.
 */
export default App;
