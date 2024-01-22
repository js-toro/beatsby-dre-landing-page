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
	return (
		<Wrapper id="specs-section" className="container">
			<Title>Specs</Title>

			<Grid>
				<div>
					<Spec>
						<span>
							<img src={BluetoothIcon} alt="Bluetooth Icon" />
						</span>
						<SpecTitle className="spec__title">Connection</SpecTitle>
						<SpecDescription className="spec__description">
							Bluetooth v5.2
						</SpecDescription>
					</Spec>

					<Spec>
						<span>
							<img src={BatteryIcon} alt="Battery Icon" />
						</span>
						<SpecTitle className="spec__title">Battery</SpecTitle>
						<SpecDescription className="spec__description">
							Duration 40h
						</SpecDescription>
					</Spec>

					<Spec>
						<span>
							<img src={PlugIcon} alt="Plug Icon" />
						</span>
						<SpecTitle className="spec__title">Load</SpecTitle>
						<SpecDescription className="spec__description">
							Fast charge 4.2-AAC
						</SpecDescription>
					</Spec>

					<Spec>
						<span>
							<img src={MicIcon} alt="Mic Icon" />
						</span>
						<SpecTitle>Microphone</SpecTitle>
						<SpecDescription>Supports Apple Siri and Google</SpecDescription>
					</Spec>
				</div>

				<Image>
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
