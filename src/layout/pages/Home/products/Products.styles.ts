import styled from "styled-components";
import { Breakpoints, Button, Colors } from "../../../../styles";

export const Wrapper = styled.div`
	margin: 0 auto;
	max-width: 80rem;
	margin-bottom: 18rem;
`;

export const Title = styled.h2`
	margin-bottom: 13rem;

	@media (min-width: ${Breakpoints.tablet.medium}) {
		font-weight: 400;
		font-size: 7.2rem;
		line-height: 10.8rem;
	}
`;

export const Grid = styled.div`
	width: fit-content;
	margin: 0 auto;
	display: grid;
	justify-items: center;
	column-gap: 5rem;
	row-gap: 10rem;

	@media (min-width: ${Breakpoints.mobile.medium}) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (min-width: ${Breakpoints.tablet.medium}) {
		grid-template-columns: repeat(3, 1fr);
	}
`;

export const Product = styled.div`
	position: relative;
	width: min(100%, 260px);
	height: 160px;
	padding: 1.4rem;
	border-radius: 8px;
	display: grid;
	grid-template-rows: 1fr 1fr;
	align-items: end;
	background-color: ${Colors.backgroundVariant};

	> img {
		position: absolute;
		top: -40px;
		justify-self: center;
	}
`;

export const ProductGrid = styled.div`
	grid-row-start: 2;
	display: grid;
	grid-template-columns: 2fr 1fr;
`;

export const ProductTitle = styled.h3`
	font-weight: 600;
	font-size: 1.4rem;
	line-height: 2.1rem;
`;

export const ProductReference = styled.p`
	font-weight: 600;
	font-size: 1.4rem;
	line-height: 2.1rem;
`;

export const ProductButton = styled(Button)`
	padding: 0.6rem;
	width: 32px;
	height: 32px;
	justify-self: end;
	align-self: flex-end;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;
