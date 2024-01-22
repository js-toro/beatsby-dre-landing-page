import { Header } from "./header";
import { Home } from "./pages/Home";
import { Footer } from "./footer";
import { CursorBall } from "../components/CursorBall";

export const Layout = () => {
	return (
		<>
			<CursorBall />
			<Header />
			<Home />
			<Footer />
		</>
	);
};
