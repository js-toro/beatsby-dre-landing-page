/**
 * Globals.ts
 *
 * Este archivo define los estilos globales y los componentes de estilo comunes para la aplicación.
 * Utiliza `styled-components` para crear estilos CSS en JS y `createGlobalStyle` para definir estilos globales.
 *
 * @file Este archivo define los estilos globales y los componentes de estilo comunes para la aplicación.
 * @author [Jose Toro]
 * @date Created on 24-01-2023
 */

import styled, { createGlobalStyle } from "styled-components";
import { Colors } from "./Colors";
import { Breakpoints } from "./Breakpoints";

/**
 * Define los estilos globales para la aplicación.
 *
 * @date Created on 24-01-2023
 */
export const GlobalStyle = createGlobalStyle`
	*,
	*::before,
	*::after {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	html {
		position: relative;
		overflow: auto;
		width: 100%;
		min-height: 100%;
		font-size: 62.5%;
		line-height: 1.15;
		-webkit-text-size-adjust: 100%;
	}

	body {
		position: relative;
		overflow: hidden;
		width: 100%;
		min-height: 100%;
		scroll-behavior: smooth;
		font-family: 'Poppins', sans-serif;
		background-color: ${Colors.background};
		color: ${Colors.light};
		font-size: 1.6rem;
		line-height: 3.2rem;
	}

	::-webkit-scrollbar {
		width: 1rem;

		&-track {
			background: linear-gradient(180deg, #403B3E 0%, #242526 100%);
		}

		&-thumb {
			border-radius: 0.5rem;
			background: ${Colors.backgroundVariant};
		}
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		color: ${Colors.white};
		line-height: 6rem;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p {
		font-weight: normal;
		text-rendering: optimizeLegibility;
	}

	h2 {
		margin-bottom: 6rem;
		font-weight: 400;
		font-size: 5.6rem;
		line-height: 8rem;
		text-align: center;
		background: linear-gradient(180deg, #424245 0%, rgba(102, 102, 122, 0) 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	img {
		max-width: 100%;
		border-style: none;
		display: block;
		object-fit: cover;
	}

	.container {
		width: 90%;

		@media (min-width: ${Breakpoints.tablet.small}) {
			width: 85%;
		}

		@media (min-width: ${Breakpoints.tablet.medium}) {
			width: 80%;
		}

		@media (min-width: ${Breakpoints.tablet.large}) {
			width: min(90%, ${Breakpoints.tablet.large});
		}

		@media (min-width: ${Breakpoints.laptop.medium}) {
			width: min(90%, ${Breakpoints.laptop.medium});
		}
	}

	a {
		color: ${Colors.light};
		font-weight: 400;
		font-size: 1.5rem;
		line-height: 2.2rem;
		transition: color 0.3s ease;
	}
`;

/**
 * Define a styled button component. This button has a variant that can be activated by passing a `$variant` prop.
 *
 * @example
 * ```typescript
 * <Button $variant={true}>Click me</Button>
 * ```
 *
 * @date Created on 24-01-2023
 */
export const Button = styled.button<{ $variant?: boolean }>`
	background: ${Colors.backgroundVariant};
	color: ${Colors.white};
	padding: 2rem;
	border-radius: 8px;
	border: 2px solid transparent;
	font-family: "Poppins", sans-serif;
	font-size: 1.5rem;
	font-weight: 400;
	line-height: 3rem;
	transition: 0.3s ease;

	&:hover {
		background-color: ${Colors.background};
		border: 2px solid ${Colors.backgroundVariant};
		cursor: pointer;
	}

	${(props) =>
		props.$variant &&
		`
		background: ${Colors.background};
		border: 2px solid ${Colors.backgroundVariant};

		&:hover {
			background-color: ${Colors.backgroundVariant};
			border: 2px solid ${Colors.background};
		}
	`}
`;
