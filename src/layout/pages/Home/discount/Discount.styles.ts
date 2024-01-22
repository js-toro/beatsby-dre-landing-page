import styled from "styled-components";
import { Breakpoints, Button, Colors } from "../../../../styles";

import ShoppingBag from "../../../../assets/shopping-bag-icon.svg";

export const Wrapper = styled.div`
	margin: 0 auto;
	background-color: ${Colors.backgroundVariant};
	position: relative;
	margin-bottom: 6rem;
	padding: 2.4rem;
	border-radius: 12px;
	display: grid;
	align-items: center;

	@media (min-width: ${Breakpoints.tablet.medium}) {
		margin-bottom: 12rem;
		padding: 5rem 10rem;
		grid-template-columns: 1fr 1fr;
		max-width: 100rem;
	}
`;

export const InfoContainer = styled.div`
	padding: 2rem;
	display: flex;
	flex-direction: column;
	gap: 2rem;

	h3 {
		font-weight: 600;
		font-size: 1.8rem;
		line-height: 2.7rem;

		@media (min-width: ${Breakpoints.tablet.medium}) {
			font-size: 2.4rem;
			line-height: 3.6rem;
		}
	}

	p {
		font-weight: 400;
		font-size: 1.4rem;
		line-height: 2.1rem;

		@media (min-width: ${Breakpoints.tablet.medium}) {
			font-size: 1.6rem;
			line-height: 2.4rem;
		}
	}
`;

export const DiscountButton = styled(Button)`
	width: min(100%, 180px);
	display: flex;
	align-items: center;
	gap: 1.5rem;

	&::before {
		content: url(${ShoppingBag});
		position: relative;
		top: 0.1rem;
		width: 3rem;
		height: 3rem;
		object-fit: cover;
	}
`;

export const DiscountImageContainer = styled.div`
	position: absolute;
	bottom: -50px;
	right: -150px;
	transform: scale(0.6);

	@media (min-width: ${Breakpoints.tablet.medium}) {
		position: relative;
		bottom: 0;
		right: 0;
		left: 0;
		top: 0;
		transform: scale(1);
	}
`;
