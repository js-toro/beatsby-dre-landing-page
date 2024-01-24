/**
 * Cursor.styles.ts
 *
 * This file contains the style definitions for the Cursor component.
 *
 * @file This file contains the style definitions for the Cursor component.
 * @author [Jose Toro]
 * @date Created on 23-01-2023
 */

import styled from "styled-components";

/**
 * Este componente es un div que se posiciona de manera fija en la pantalla,
 * y ocupa todo el ancho y alto de la pantalla.
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
