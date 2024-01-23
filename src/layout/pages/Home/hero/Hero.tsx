import gsap from "gsap";
import { useContext, useEffect } from "react";
import { CursorContext } from "../../..";

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

export const Hero = () => {
	const { setHovered } = useContext(CursorContext);

	const animationDelay = 3;
	const animationDuration = 0.25;
	const displacement = -100;

	const animateImage = (image: HTMLImageElement, delay: number) => {
		gsap.to(image, {
			y: 0,
			duration: animationDuration,
			delay: delay,
			onComplete: () => animateImageOut(image),
		});
	};

	const animateImageOut = (image: HTMLImageElement) => {
		gsap.to(image, {
			x: displacement,
			duration: animationDuration,
			delay: animationDelay,
			onComplete: () => resetImagePosition(image),
		});
	};

	const resetImagePosition = (image: HTMLImageElement) => {
		gsap.set(image, { x: 0, y: displacement });
		animateImage(image, 0);
	};

	useEffect(() => {
		const imageElements = gsap.utils.toArray<HTMLImageElement>(".stores-image");
		imageElements.forEach((image, index) => {
			animateImage(image, index * animationDuration);
		});
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
				<HeroTitle>Beats 3</HeroTitle>
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
