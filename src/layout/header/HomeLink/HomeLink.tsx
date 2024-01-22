import { useRef } from "react";

import BeatsbyDreLogo from "../../../assets/beatsby-logo.png";
import gsap from "gsap";
import styled from "styled-components";

const Wrapper = styled.div`
	display: grid;
	grid-template-columns: 32px 1fr;
`;

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
		<Wrapper>
			<a href="#" onMouseOver={handleClick}>
				<img
					ref={logoRef}
					src={BeatsbyDreLogo}
					draggable="false"
					alt="Beatsby Logo"
				/>
			</a>
		</Wrapper>
	);
};
