import styled from "styled-components";

/**
 * This component is a div that is positioned fixed on the screen.
 * and occupies the entire width and height of the screen.
 */
export const Wrapper = styled.div`
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	position: fixed;
	z-index: 1000;
	pointer-events: none;
	mix-blend-mode: difference;
`;

/**
 * This component is a div that is shaped like a circle
 * and initially positioned off the screen (translate(-100px, -100px)).
 */
export const Ball = styled.div`
	width: 10px;
	height: 10px;
	border-radius: 50%;
	background-color: #fff;
	transform: translate(-100px, -100px);
`;
