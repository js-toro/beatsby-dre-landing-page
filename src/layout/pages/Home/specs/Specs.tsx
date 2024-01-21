// import all images
import BluetoothIcon from "./assets/bluetooth-icon.svg";
import BatteryIcon from "./assets/battery-charging-icon.svg";
import PlugIcon from "./assets/plug-icon.svg";
import MicIcon from "./assets/mic-icon.svg";
import SpecsImage from "./assets/specs-image.png";

export const Specs = () => {
	return (
		<section id="specs-section" className="container specs">
			<h2 className="specs__title">Specs</h2>

			<div className="specs__grid">
				<div>
					<div className="spec">
						<span className="spec__icon">
							<img src={BluetoothIcon} alt="Bluetooth Icon" />
						</span>
						<h3 className="spec__title">Connection</h3>
						<p className="spec__description">Bluetooth v5.2</p>
					</div>

					<div className="spec">
						<span className="spec__icon">
							<img src={BatteryIcon} alt="Battery Icon" />
						</span>
						<h3 className="spec__title">Battery</h3>
						<p className="spec__description">Duration 40h</p>
					</div>

					<div className="spec">
						<span className="spec__icon">
							<img src={PlugIcon} alt="Plug Icon" />
						</span>
						<h3 className="spec__title">Load</h3>
						<p className="spec__description">Fast charge 4.2-AAC</p>
					</div>

					<div className="spec">
						<span className="spec__icon">
							<img src={MicIcon} alt="Mic Icon" />
						</span>
						<h3 className="spec__title">Microphone</h3>
						<p className="spec__description">Supports Apple Siri and Google</p>
					</div>
				</div>

				<div className="specs__image">
					<img
						src={SpecsImage}
						alt="A beautiful headphones"
						draggable="false"
					/>
				</div>
			</div>
		</section>
	);
};
