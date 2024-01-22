import gsap from "gsap";
import { useEffect, useRef } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	position: fixed;
	z-index: 1000;
	pointer-events: none;
	mix-blend-mode: difference;
`;

const Ball = styled.div`
	width: 50px;
	height: 50px;
	border-radius: 50%;
	background-color: #fff;
`;

export const CursorBall = () => {
	const cursor = useRef<HTMLDivElement>(null);

	useEffect(() => {
		gsap.set(cursor.current, { xPercent: -50, yPercent: -50 });
		let targets = gsap.utils.toArray(cursor.current);
		window.addEventListener("mousemove", (e) => {
			gsap.to(targets, {
				duration: 0.33,
				x: e.clientX,
				y: e.clientY,
				ease: "power1.out",
				overwrite: "auto",
				stagger: 0.02,
			});
		});
	}, []);

	return (
		<Wrapper>
			<Ball ref={cursor} />
		</Wrapper>
	);
};
