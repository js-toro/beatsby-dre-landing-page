import React, { useContext } from "react";

import { CursorContext } from "../../../components/Cursor";
import styled from "styled-components";

import BeatsbyDreLogo from "../../../assets/beatsby-logo.png";

const Wrapper = styled.div`
	display: grid;
	grid-template-columns: 32px 1fr;

	img {
		&:hover {
			cursor: pointer;
		}
	}
`;

interface HomeLinkProps {
	scrollToSection: (section: string) => void;
}

export const HomeLink: React.FC<HomeLinkProps> = ({ scrollToSection }) => {
	const { setHovered } = useContext(CursorContext);

	return (
		<Wrapper>
			<a
				onMouseEnter={() => setHovered(true)}
				onMouseLeave={() => setHovered(false)}
				onClick={() => scrollToSection("#home-section")}
			>
				<img src={BeatsbyDreLogo} draggable="false" alt="Beatsby Logo" />
			</a>
		</Wrapper>
	);
};
