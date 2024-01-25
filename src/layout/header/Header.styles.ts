import styled from 'styled-components';
import { Breakpoints, Colors } from '../../styles';

export const Wrapper = styled.header`
	position: fixed;
	left: 0;
	right: 0;
	margin: 2.4rem auto;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	z-index: 10;

	@media (min-width: ${Breakpoints.tablet.medium}) {
		margin: 4rem auto;
	}
`;

export const NavigationMenu = styled.nav<{ $active: Boolean }>`
	display: none;
	transition: all 0.3s ease;

	@media (min-width: ${Breakpoints.tablet.medium}) {
		display: flex;
		gap: 5rem;
		align-items: center;
	}

	${({ $active }) =>
		$active &&
		`
    width: 100%;
    height: 100%;

    position: fixed;
    top: 0;
    left: 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    background-color: ${Colors.backgroundAlpa};

    @media (min-width: ${Breakpoints.tablet.medium}) {
      position: relative;

      width: fit-content;
      height: fit-content;

      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 5rem;

      background-color: transparent;
    }
  `}
`;

export const Link = styled.a`
	color: ${Colors.white};
	font-weight: 700;
	font-size: 1.4rem;
	line-height: 2rem;
	transition: color 0.3s ease;
	text-decoration: none;

	&:hover {
		cursor: pointer;
	}
`;

export const NavegationButton = styled.button`
	justify-self: end;
	width: fit-content;
	border: none;
	background-color: transparent;
	z-index: 12;

	&:hover {
		cursor: pointer;
	}

	img {
		width: 32px;
		height: 32px;
		filter: opacity(1);
		transition: filter 0.3s ease;

		&:hover {
			filter: opacity(0.5);
		}
	}

	@media (min-width: ${Breakpoints.tablet.medium}) {
		display: none;
	}
`;
