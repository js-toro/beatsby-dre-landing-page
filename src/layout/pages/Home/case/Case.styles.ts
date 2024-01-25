import styled from 'styled-components';
import { Breakpoints, Button } from '../../../../styles';

export const Wrapper = styled.section`
	margin: 0 auto;
	margin-bottom: 6rem;

	@media (min-width: ${Breakpoints.tablet.medium}) {
		margin-bottom: 12rem;
	}
`;

export const Title = styled.h2`
	@media (min-width: ${Breakpoints.tablet.medium}) {
		font-weight: 400;
		font-size: 7.2rem;
		line-height: 10.8rem;
	}
`;

export const CaseContainer = styled.div`
	display: grid;
	margin: 0 auto;
	max-width: 50rem;
	gap: 4rem;

	@media (min-width: ${Breakpoints.mobile.medium}) {
		gap: 0;
		grid-template-columns: repeat(2, 1fr);
	}
`;

export const CaseImageContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	img {
		width: 50%;

		@media (min-width: ${Breakpoints.mobile.medium}) {
			width: 100%;
			position: relative;
			left: -80px;
		}
	}
`;

export const CaseInfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 2rem;

	@media (min-width: ${Breakpoints.mobile.medium}) {
		gap: 4rem;
	}

	p {
		font-size: 1.4rem;
		font-weight: 400;

		@media (min-width: ${Breakpoints.mobile.medium}) {
			padding-right: 4rem;
		}

		@media (min-width: ${Breakpoints.tablet.medium}) {
			font-weight: 400;
			font-size: 1.6rem;
			line-height: 3.2rem;
		}
	}
`;

export const CaseButton = styled(Button)`
	width: min(100%, 180px);
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
`;
