import {
	CopyRight,
	Grid,
	HomeImage,
	Links,
	Wrapper,
	SubscribeButton,
	Subscribe,
	Socials,
	SocialButton,
	Products,
	Support,
} from "./Footer.styles";

import BeatsbeLogo from "../../assets/beatsby-logo.png";
import FacebookIcon from "../../assets/facebook-icon.svg";
import TwitterIcon from "../../assets/twitter-icon.svg";
import InstagramIcon from "../../assets/instagram-icon.svg";
import LinkedinIcon from "../../assets/linkedin-icon.svg";

export const Footer = () => {
	return (
		<Wrapper className="container">
			<Grid>
				<HomeImage>
					<a href="#">
						<img draggable="false" src={BeatsbeLogo} alt="Beatsby Logo" />
					</a>
				</HomeImage>

				<Links>
					<Products>
						<h3>Products</h3>
						<a href="#">Headphones</a>
						<a href="#">Earphones</a>
						<a href="#">Earbuds</a>
						<a href="#">Accessories</a>
					</Products>

					<Support>
						<h3>Supports</h3>
						<a href="#">Product help</a>
						<a href="#">Register</a>
						<a href="#">Updates</a>
						<a href="#">Provides</a>
					</Support>
				</Links>

				<div>
					<Subscribe>
						<input type="text" placeholder="Email" />
						<SubscribeButton $variant={true}>Subscribe</SubscribeButton>
					</Subscribe>

					<Socials>
						<SocialButton>
							<img src={FacebookIcon} alt="Facebook logo" />
						</SocialButton>
						<SocialButton>
							<img src={TwitterIcon} alt="Twitter logo" />
						</SocialButton>
						<SocialButton>
							<img src={InstagramIcon} alt="Instagram logo" />
						</SocialButton>
						<SocialButton>
							<img src={LinkedinIcon} alt="Linkedin logo" />
						</SocialButton>
					</Socials>
				</div>
			</Grid>

			<CopyRight>&copy; MrToro. All rights reserved</CopyRight>
		</Wrapper>
	);
};
