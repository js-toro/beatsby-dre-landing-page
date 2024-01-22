import {
	Wrapper,
	HeroImage,
	HeroTitle,
	HeroDescription,
	HeroSubtitle,
	CTA,
	Stores,
} from "./Hero.styles";

import HeroPng from "../../../../assets/hero.png";
import AmazonLogo from "../../../../assets/amazon-logo.png";
import AppleLogo from "../../../../assets/apple-logo.png";
import Spotify from "../../../../assets/spotify-logo.png";
import Youtube from "../../../../assets/youtube-logo.png";

export const Hero = () => {
	return (
		<Wrapper id="home-section" className="container">
			<div>
				<HeroImage
					src={HeroPng}
					alt="A beautiful headphones"
					draggable="false"
				/>
			</div>

			<div>
				<HeroTitle>Beats 3</HeroTitle>
				<HeroSubtitle>Overview</HeroSubtitle>
				<HeroDescription>
					Enjoy award-winning Beats sound with wireless listening freedom and a
					sleek, streamlined design with comfortable padded earphones,
					delivering first-rate playback.
				</HeroDescription>
				<CTA>
					Add to Bag <span>N399K</span>
				</CTA>
			</div>

			<Stores>
				<a href="#">
					<img draggable="false" src={AppleLogo} alt="Apple Logo" />
				</a>
				<a href="#">
					<img draggable="false" src={Spotify} alt="Spotify Logo" />
				</a>
				<a href="#">
					<img draggable="false" src={AmazonLogo} alt="Amazon Logo" />
				</a>
				<a href="#">
					<img draggable="false" src={Youtube} alt="Youtube Logo" />
				</a>
			</Stores>
		</Wrapper>
	);
};
