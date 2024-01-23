import { GlobalStyle } from "./styles";
import { Layout } from "./layout";

import { gsap } from "gsap";
import { ScrollToPlugin, ScrollTrigger, TextPlugin } from "gsap/all";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger, TextPlugin);

const App = () => {
	return (
		<>
			<GlobalStyle />
			<Layout id="smooth-wrapper" />
		</>
	);
};

export default App;
