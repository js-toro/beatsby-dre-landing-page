import styled from "styled-components";
import { Breakpoints, Button } from "../../../../styles";

export const Wrapper = styled.section`
	display: grid;
	margin: 0 auto;

	@media (min-width: ${Breakpoints.tablet.small}) {
		grid-template-columns: repeat(2, 1fr);

		div:first-child {
			position: relative;
		}
	}
`;

export const HeroImage = styled.img`
	object-fit: cover;
	height: 350px;
	position: absolute;
	top: -100px;
	right: 5%;
	z-index: -1;

	@media (min-width: ${Breakpoints.mobile.medium}) {
		height: 500px;
		top: -150px;
	}

	@media (min-width: ${Breakpoints.tablet.small}) {
		height: 75%;
		top: 0;
		right: 10%;
	}

	@media (min-width: ${Breakpoints.tablet.medium}) {
		height: 95%;
		right: 12%;
	}

	@media (min-width: ${Breakpoints.tablet.large}) {
		right: 18%;
	}
`;

export const HeroTitle = styled.h1`
	margin-top: 25rem;
	font-size: 4rem;
	font-weight: 600;
	position: relative;

	@media (min-width: ${Breakpoints.tablet.medium}) {
		font-size: 5rem;
	}

	@media (min-width: ${Breakpoints.laptop.small}) {
		font-size: 6rem;
	}

	@media (min-width: ${Breakpoints.desktop.small}) {
		font-size: 6.4rem;
	}

	&::before {
		content: "On ear";
		position: absolute;
		top: -6rem;
		left: 1.5rem;
		color: transparent;
		background: linear-gradient(180deg, #403b3e 0%, #242526 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		font-size: 6rem;
		font-weight: 600;
		padding: 0;

		@media (min-width: ${Breakpoints.tablet.medium}) {
			font-size: 8rem;
			top: -8rem;
		}

		@media (min-width: ${Breakpoints.laptop.small}) {
			font-size: 10rem;
			top: -10rem;
			padding: 1rem 0;
		}

		@media (min-width: ${Breakpoints.desktop.small}) {
			font-size: 12rem;
			top: -12rem;
			padding: 2rem 0;
		}
	}
`;

export const HeroSubtitle = styled.h3`
	margin-top: 4rem;
	font-size: 1.8rem;
	font-weight: 600;

	@media (min-width: ${Breakpoints.tablet.medium}) {
		font-size: 2rem;
	}
`;

export const HeroDescription = styled.p`
	font-size: 1.4rem;
	font-weight: 400;

	@media (min-width: ${Breakpoints.tablet.medium}) {
		font-size: 1.6rem;
	}

	@media (min-width: ${Breakpoints.tablet.large}) {
		padding-right: 25%;
	}
`;

export const CTA = styled(Button)`
	margin-top: 5rem;
	display: flex;
	align-items: center;
	gap: 1.5rem;

	img {
		position: relative;
		top: 0.1rem;
		width: 3rem;
		height: 3rem;
		object-fit: cover;
	}

	span {
		font-size: 2rem;
		font-weight: 600;
	}
`;

export const Stores = styled.div`
	margin: 8rem 0;
	grid-column: 1 / 3;
	display: grid;
	grid-template-columns: 1fr 1fr;
	align-items: center;
	justify-items: center;
	gap: 3rem;

	@media (min-width: ${Breakpoints.mobile.medium}) {
		grid-template-columns: repeat(4, 1fr);
		justify-items: start;
	}

	@media (min-width: ${Breakpoints.tablet.medium}) {
		justify-items: center;
	}

	a {
		height: fit-content;
	}
`;
