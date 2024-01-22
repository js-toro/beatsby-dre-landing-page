import styled from "styled-components";
import { Colors, Button } from "../../styles";
import { Breakpoints } from "../../styles";

import SendIcon from "../../assets/send-icon.svg";

export const Wrapper = styled.footer`
	margin: 2.4rem auto;

	@media (min-width: ${Breakpoints.tablet.medium}) {
		margin: 4rem auto;
	}

	h3 {
		font-weight: 600;
		font-size: 2rem;
		line-height: 3rem;
	}

	p {
		font-weight: 400;
		font-size: 1.5rem;
		line-height: 2.2rem;
	}
`;

export const Grid = styled.div`
	display: grid;
	gap: 3rem;

	@media (min-width: ${Breakpoints.tablet.large}) {
		grid-template-columns: 2fr 5fr 5fr;
	}
`;

export const HomeImage = styled.div`
	display: flex;
	justify-content: center;
`;

export const Links = styled.div`
	display: flex;
	flex-direction: column;
	gap: 3rem;

	@media (min-width: ${Breakpoints.mobile.medium}) {
		flex-direction: row;
		justify-content: space-around;
		gap: 0;
	}

	@media (min-width: ${Breakpoints.tablet.medium}) {
		gap: 3rem;
	}
`;

export const Subscribe = styled.div`
	background-color: ${Colors.backgroundVariant};
	width: 100%;
	padding: 0.8rem;
	border-radius: 8px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 2rem;

	@media (min-width: ${Breakpoints.mobile.medium}) {
		flex-direction: row;
	}

	input {
		background-color: transparent;
		width: 100%;
		border: none;
		padding: 1rem;
		color: ${Colors.light};
		font-family: "Poppins", sans-serif;
		font-weight: 400;
		font-size: 1.5rem;
		line-height: 2.2rem;
	}
`;

export const LinksColumn = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;

	@media (min-width: ${Breakpoints.tablet.large}) {
		flex-grow: 1;
	}

	a {
		text-decoration: none;
	}
`;

export const Products = styled(LinksColumn)``;

export const Support = styled(LinksColumn)``;

export const SubscribeButton = styled(Button)`
	display: flex;
	align-items: center;
	gap: 1rem;

	&::before {
		content: url(${SendIcon});
		height: 18px;
	}
`;

export const Socials = styled.div`
	display: flex;
	justify-content: center;
	gap: 2rem;
	margin: 3.2rem 0;

	@media (min-width: ${Breakpoints.tablet.medium}) {
		justify-content: start;
	}
`;

export const SocialButton = styled(Button)`
	width: 32px;
	height: 32px;
	padding: 0.6rem;

	img {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}
`;

export const CopyRight = styled.p`
	margin: 3.2rem;
	text-align: center;
`;
