import gsap from "gsap";
import { useContext, useEffect } from "react";

import { CursorContext } from "../../../../components/Cursor";
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
import bag from "../../../../assets/shopping-bag-icon.svg";

import { animateImage, animateHeadingTextOut } from "./Hero.animations";

export const Hero = () => {
	const { setHovered } = useContext(CursorContext);

	useEffect(() => {
		animateHeadingTextOut(".heading-text");

		const imageElements = gsap.utils.toArray<HTMLImageElement>(".stores-image");
		animateImage(imageElements);
	}, []);

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
				<HeroTitle>
					<span className="heading-text">Beat The World!</span>
					<span>On Ear</span>
				</HeroTitle>
				<HeroSubtitle>Overview</HeroSubtitle>
				<HeroDescription>
					Enjoy award-winning Beats sound with wireless listening freedom and a
					sleek, streamlined design with comfortable padded earphones,
					delivering first-rate playback.
				</HeroDescription>
				<CTA
					onMouseEnter={() => setHovered(true)}
					onMouseLeave={() => setHovered(false)}
				>
					<img src={bag} alt="Bag icon" />
					Add to Bag <span>N399K</span>
				</CTA>
			</div>

			<Stores>
				<a
					href="#"
					onMouseEnter={() => setHovered(true)}
					onMouseLeave={() => setHovered(false)}
				>
					<img
						className="stores-image"
						draggable="false"
						src={AppleLogo}
						alt="Apple Logo"
					/>
				</a>
				<a
					href="#"
					onMouseEnter={() => setHovered(true)}
					onMouseLeave={() => setHovered(false)}
				>
					<img
						className="stores-image"
						draggable="false"
						src={Spotify}
						alt="Spotify Logo"
					/>
				</a>
				<a
					href="#"
					onMouseEnter={() => setHovered(true)}
					onMouseLeave={() => setHovered(false)}
				>
					<img
						className="stores-image"
						draggable="false"
						src={AmazonLogo}
						alt="Amazon Logo"
					/>
				</a>
				<a
					href="#"
					onMouseEnter={() => setHovered(true)}
					onMouseLeave={() => setHovered(false)}
				>
					<img
						className="stores-image"
						draggable="false"
						src={Youtube}
						alt="Youtube Logo"
					/>
				</a>
			</Stores>
		</Wrapper>
	);
};
