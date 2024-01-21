import HeroImage from "./assets/hero.png";
import AmazonLogo from "./assets/amazon-logo.png";
import AppleLogo from "./assets/apple-logo.png";
import Spotify from "./assets/spotify-logo.png";
import Youtube from "./assets/youtube-logo.png";

export const Hero = () => {
	return (
		<section id="home-section" className="container home">
			<div>
				<img
					className="home__hero"
					src={HeroImage}
					alt="A beautiful headphones"
					draggable="false"
				/>
			</div>

			<div>
				<h1 className="home__title">Beats 3</h1>
				<h3 className="home__subtitle">Overview</h3>
				<p className="home__description">
					Enjoy award-winning Beats sound with wireless listening freedom and a
					sleek, streamlined design with comfortable padded earphones,
					delivering first-rate playback.
				</p>
				<button className="btn home__cta">
					Add to Bag <span>N399K</span>
				</button>
			</div>

			<div className="home__stores">
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
			</div>
		</section>
	);
};
