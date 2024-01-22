import { Header } from "./header";
import { Home } from "./pages/Home";
import { Footer } from "./footer";
import { CursorBall } from "../components/CursorBall";
import { isMobile } from "react-device-detect";

export const Layout = () => {
	return (
		<>
			{!isMobile && <CursorBall />}
			<Header />
			<Home />
			<Footer />
		</>
	);
};
