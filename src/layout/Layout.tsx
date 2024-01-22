import { isMobile } from "react-device-detect";

import { CursorBall } from "../components/CursorBall";
import { Header } from "./header";
import { Home } from "./pages/Home";
import { Footer } from "./footer";
import { createContext, useState } from "react";

export const CursorContext = createContext(
	{} as { hovered: boolean; setHovered: (hovered: boolean) => void }
);

export const Layout = () => {
	const [hovered, setHovered] = useState(false);

	return (
		<>
			<CursorContext.Provider value={{ hovered, setHovered }}>
				{!isMobile && <CursorBall />}
				<Header />
				<Home />
				<Footer />
			</CursorContext.Provider>
		</>
	);
};
