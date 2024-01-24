import React from "react";

import { Cursor } from "../components/Cursor";
import { Header } from "./header";
import { Home } from "./pages/Home";
import { Footer } from "./footer";

export const Layout: React.FC = () => {
	return (
		<Cursor>
			<Header />
			<Home />
			<Footer />
		</Cursor>
	);
};
