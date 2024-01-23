import styled from "styled-components";
import { Breakpoints } from "../../../../styles";

export const Wrapper = styled.section`
	margin: 0 auto;
	margin-top: 3rem;
	margin-bottom: 6rem;

	@media (min-width: ${Breakpoints.tablet.medium}) {
		margin-top: 6rem;
		margin-bottom: 12rem;
	}
`;

export const Title = styled.h2`
	opacity: 0;
	transform: translateY(100%);
	transition: all cubic-bezier(0.1, 0.5, 0.5, 1) 0.5s;

	@media (min-width: ${Breakpoints.tablet.medium}) {
		font-weight: 400;
		font-size: 7.2rem;
		line-height: 10.8rem;
	}
`;

export const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	align-items: center;
	margin: 0 auto;
	max-width: 50rem;
`;

export const Image = styled.div`
	position: relative;
	top: -25px;
	right: -5rem;

	img {
		opacity: 0;
		transition: opacity cubic-bezier(0.1, 0.5, 0.5, 1) 0.5s;
	}
`;

export const Spec = styled.div`
	margin-bottom: 2rem;
	position: relative;
	opacity: 0;
	transform: translateX(-100%);
	transition: all cubic-bezier(0.1, 0.5, 0.5, 1) 0.5s;

	&:first-child,
	&:last-child {
		left: 2.4rem;
	}

	&:last-child {
		margin-bottom: 0;
	}
`;

export const SpecTitle = styled.h3`
	font-weight: 600;
	font-size: 1.6rem;
	line-height: 2.2rem;
`;

export const SpecDescription = styled.p`
	font-weight: 400;
	font-size: 1.2rem;
	line-height: 1.8rem;
`;
