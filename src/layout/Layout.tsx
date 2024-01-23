import React, { createContext, useState } from "react";
import { isMobile } from "react-device-detect";

import { CursorBall } from "../components/CursorBall";
import { Header } from "./header";
import { Home } from "./pages/Home";
import { Footer } from "./footer";

export const CursorContext = createContext(
	{} as { hovered: boolean; setHovered: (hovered: boolean) => void }
);

export const Layout: React.FC<{ id: string }> = ({ id }) => {
	const [hovered, setHovered] = useState(false);

	return (
		<div id={id}>
			<CursorContext.Provider value={{ hovered, setHovered }}>
				{!isMobile && <CursorBall />}
				<Header />
				<Home />
				<Footer />
			</CursorContext.Provider>
		</div>
	);
};
