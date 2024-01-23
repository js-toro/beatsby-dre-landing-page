import { GlobalStyle } from "./styles";
import { Layout } from "./layout";

import gsap from "gsap";
import { ScrollToPlugin, ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

const App = () => {
	return (
		<>
			<GlobalStyle />
			<Layout />
		</>
	);
};

export default App;
