import { useEffect } from "react";
import gsap from "gsap";

import {
	Grid,
	Image,
	Spec,
	SpecDescription,
	SpecTitle,
	Title,
	Wrapper,
} from "./Specs.styles";

// import all images
import BluetoothIcon from "../../../../assets/bluetooth-icon.svg";
import BatteryIcon from "../../../../assets/battery-charging-icon.svg";
import PlugIcon from "../../../../assets/plug-icon.svg";
import MicIcon from "../../../../assets/mic-icon.svg";
import SpecsImage from "../../../../assets/specs-image.png";

export const Specs = () => {
	useEffect(() => {
		gsap.to(".title", {
			opacity: 1,
			y: 0,
			ease: "none",
			scrollTrigger: {
				trigger: ".title",
				start: "center 100%",
				end: "center 50%",
				scrub: true,
			},
		});

		const specElements = gsap.utils.toArray<HTMLDivElement>(".spec");
		specElements.forEach((text) => {
			gsap.to(text, {
				opacity: 1,
				x: 0,
				ease: "none",
				scrollTrigger: {
					trigger: text,
					start: "center 100%",
					end: "center 80%",
					scrub: true,
				},
			});
		});

		gsap.to(".image", {
			y: -25,
			duration: 7,
			repeat: -1,
			yoyo: true,
			ease: "none",
		});

		gsap.to(".image img", {
			opacity: 1,
			ease: "none",
			scrollTrigger: {
				trigger: ".image",
				start: "center 100%",
				end: "center 70%",
				scrub: true,
			},
		});
	}, []);

	return (
		<Wrapper id="specs-section" className="container">
			<Title className="title">Specs</Title>

			<Grid>
				<div>
					<Spec className="spec">
						<span>
							<img src={BluetoothIcon} alt="Bluetooth Icon" />
						</span>
						<SpecTitle className="spec__title">Connection</SpecTitle>
						<SpecDescription className="spec__description">
							Bluetooth v5.2
						</SpecDescription>
					</Spec>

					<Spec className="spec">
						<span>
							<img src={BatteryIcon} alt="Battery Icon" />
						</span>
						<SpecTitle className="spec__title">Battery</SpecTitle>
						<SpecDescription className="spec__description">
							Duration 40h
						</SpecDescription>
					</Spec>

					<Spec className="spec">
						<span>
							<img src={PlugIcon} alt="Plug Icon" />
						</span>
						<SpecTitle className="spec__title">Load</SpecTitle>
						<SpecDescription className="spec__description">
							Fast charge 4.2-AAC
						</SpecDescription>
					</Spec>

					<Spec className="spec">
						<span>
							<img src={MicIcon} alt="Mic Icon" />
						</span>
						<SpecTitle>Microphone</SpecTitle>
						<SpecDescription>Supports Apple Siri and Google</SpecDescription>
					</Spec>
				</div>

				<Image className="image">
					<img
						src={SpecsImage}
						alt="A beautiful headphones"
						draggable="false"
					/>
				</Image>
			</Grid>
		</Wrapper>
	);
};
