import { useRef } from "react";

import BeatsbyDreLogo from "./assets/beatsby-logo.png";
import gsap from "gsap";

export const HomeLink = () => {
	const logoRef = useRef<HTMLImageElement>(null);

	const handleClick = () => {
		gsap.to(logoRef.current, {
			duration: 0.5,
			rotation: 360,
			onComplete: () => {
				gsap.set(logoRef.current, { rotation: 0 });
			},
		});
	};

	return (
		<div>
			<a href="#" onMouseOver={handleClick}>
				<img
					ref={logoRef}
					draggable="false"
					src={BeatsbyDreLogo}
					alt="Beatsby Logo"
				/>
			</a>
		</div>
	);
};
