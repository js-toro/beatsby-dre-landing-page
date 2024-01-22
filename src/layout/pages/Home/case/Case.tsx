import {
	CaseButton,
	CaseContainer,
	CaseImageContainer,
	CaseInfoContainer,
	Title,
	Wrapper,
} from "./Case.styles";

import CaseImage from "../../../../assets/case-image.png";
import AlertIcon from "../../../../assets/alert-icon.svg";

export const Case = () => {
	return (
		<Wrapper id="case-section" className="container">
			<Title>Case</Title>

			<CaseContainer>
				<CaseImageContainer>
					<img
						src={CaseImage}
						alt="A beautiful case for your headphones"
						draggable="false"
					/>
				</CaseImageContainer>

				<CaseInfoContainer>
					<p>
						With a comfortable and adaptable case so that you can store it
						whenever you want, and keep your durability forever.
					</p>
					<CaseButton>
						<img src={AlertIcon} alt="Alert icon" /> More info
					</CaseButton>
				</CaseInfoContainer>
			</CaseContainer>
		</Wrapper>
	);
};
