import gsap from "gsap";
import { MouseEvent, useRef } from "react";

import styled from "styled-components";
import { Breakpoints } from "../../../styles";

import HamburguerIcon from "../../../assets/hamburger-icon.svg";

const Wrapper = styled.button`
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
	}

	@media (min-width: ${Breakpoints.tablet.medium}) {
		display: none;
	}
`;

interface NavigationButtonProps {
	onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const NavigationButton: React.FC<NavigationButtonProps> = ({
	onClick,
}) => {
	const imageRef = useRef<HTMLImageElement>(null);

	const handleClick = () => {
		gsap.to(imageRef.current, {
			duration: 0.5,
			rotation: 360,
			onComplete: () => {
				gsap.set(imageRef.current, { rotation: 0 });
			},
		});
	};

	return (
		<Wrapper
			onClick={(event) => {
				onClick(event);
				handleClick();
			}}
		>
			<img
				ref={imageRef}
				draggable="false"
				src={HamburguerIcon}
				alt="Beatsby Hamburger Icon"
			/>
		</Wrapper>
	);
};
