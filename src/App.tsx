import { GlobalStyle } from "./styles";
import { Layout } from "./layout";

import gsap from "gsap";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

const App = () => {
	return (
		<>
			<GlobalStyle />
			<Layout />
		</>
	);
};

export default App;
