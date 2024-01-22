import React from "react";
import BeatsbyDreLogo from "../../../assets/beatsby-logo.png";
import styled from "styled-components";

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
	return (
		<Wrapper>
			<a onClick={() => scrollToSection("#home-section")}>
				<img src={BeatsbyDreLogo} draggable="false" alt="Beatsby Logo" />
			</a>
		</Wrapper>
	);
};
