import { useContext, useEffect } from 'react';

import { CursorContext } from '../../../../components/Cursor';
import {
	CaseButton,
	CaseContainer,
	CaseImageContainer,
	CaseInfoContainer,
	Title,
	Wrapper,
} from './Case.styles';

import {
	animateTitle,
	animateCaseInfo,
	animateOnButtonEnter,
	animateOnButtonExit,
	animateCaseImage,
} from './Case.animations';

import CaseImage from '../../../../assets/case-image.png';
import AlertIcon from '../../../../assets/alert-icon.svg';

export const Case = () => {
	const { setHovered } = useContext(CursorContext);

	useEffect(() => {
		animateTitle();
		animateCaseInfo();
		animateCaseImage();
	}, []);

	return (
		<Wrapper id="case-section" className="container">
			<Title className="case-title">Case</Title>

			<CaseContainer>
				<CaseImageContainer>
					<img
						className="case-image"
						src={CaseImage}
						alt="A beautiful case for your headphones"
						draggable="false"
					/>
				</CaseImageContainer>

				<CaseInfoContainer>
					<p className="case-info">
						With a comfortable and adaptable case so that you can store it
						whenever you want, and keep your durability forever.
					</p>
					<CaseButton
						className="case-info"
						onMouseEnter={() => {
							setHovered(true);
							animateOnButtonEnter();
						}}
						onMouseLeave={() => {
							setHovered(false);
							animateOnButtonExit();
						}}>
						<img src={AlertIcon} alt="Alert icon" />{' '}
						<span className="more-info-text">More info</span>
					</CaseButton>
				</CaseInfoContainer>
			</CaseContainer>
		</Wrapper>
	);
};
