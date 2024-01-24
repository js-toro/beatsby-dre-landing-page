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
 * This component is a div that is positioned fixed on the screen,
 * and occupies the entire width and height of the screen.
 *
 * @component
 * @example
 * import React from 'react';
 * import { Wrapper } from './Cursor.styles';
 *
 * const MyComponent = () => {
 * 	return (
 * 		<Wrapper>
 * 			<p>Este es un contenido que se mostrará en toda la pantalla.</p>
 * 		</Wrapper>
 * 	);
 * };
 *
 * export default MyComponent;
 *
 * @date Created on 23-01-2023
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
 * and is initially positioned off the screen (translate(-100px, -100px)).
 *
 * @date Created on 23-01-2023
 *
 * @example
 * ```typescript
 * import React from 'react';
 * import { Ball } from './Cursor.styles';
 *
 * const MyComponent = () => {
 *     return (
 *         <div>
 *             <Ball />
 *         </div>
 *     );
 * };
 *
 * export default MyComponent;
 * ```
 */
export const Ball = styled.div`
	width: 10px;
	height: 10px;
	border-radius: 50%;
	background-color: #fff;
	transform: translate(-100px, -100px);
`;
