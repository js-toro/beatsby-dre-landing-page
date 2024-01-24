import React, { useContext } from "react";

import { CursorContext } from "../../components/Cursor";
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

export const Footer: React.FC = () => {
	const { setHovered } = useContext(CursorContext);

	return (
		<Wrapper className="container">
			<Grid>
				<HomeImage>
					<a
						href="#"
						onMouseEnter={() => setHovered(true)}
						onMouseLeave={() => setHovered(false)}
					>
						<img draggable="false" src={BeatsbeLogo} alt="Beatsby Logo" />
					</a>
				</HomeImage>

				<Links>
					<Products>
						<h3>Products</h3>
						<a
							href="#"
							onMouseEnter={() => setHovered(true)}
							onMouseLeave={() => setHovered(false)}
						>
							Headphones
						</a>
						<a
							href="#"
							onMouseEnter={() => setHovered(true)}
							onMouseLeave={() => setHovered(false)}
						>
							Earphones
						</a>
						<a
							href="#"
							onMouseEnter={() => setHovered(true)}
							onMouseLeave={() => setHovered(false)}
						>
							Earbuds
						</a>
						<a
							href="#"
							onMouseEnter={() => setHovered(true)}
							onMouseLeave={() => setHovered(false)}
						>
							Accessories
						</a>
					</Products>

					<Support>
						<h3>Supports</h3>
						<a
							href="#"
							onMouseEnter={() => setHovered(true)}
							onMouseLeave={() => setHovered(false)}
						>
							Product help
						</a>
						<a
							href="#"
							onMouseEnter={() => setHovered(true)}
							onMouseLeave={() => setHovered(false)}
						>
							Register
						</a>
						<a
							href="#"
							onMouseEnter={() => setHovered(true)}
							onMouseLeave={() => setHovered(false)}
						>
							Updates
						</a>
						<a
							href="#"
							onMouseEnter={() => setHovered(true)}
							onMouseLeave={() => setHovered(false)}
						>
							Provides
						</a>
					</Support>
				</Links>

				<div>
					<Subscribe>
						<input type="text" placeholder="Email" />
						<SubscribeButton
							onMouseEnter={() => setHovered(true)}
							onMouseLeave={() => setHovered(false)}
							$variant={true}
						>
							Subscribe
						</SubscribeButton>
					</Subscribe>

					<Socials>
						<SocialButton
							onMouseEnter={() => setHovered(true)}
							onMouseLeave={() => setHovered(false)}
						>
							<img src={FacebookIcon} alt="Facebook logo" />
						</SocialButton>
						<SocialButton
							onMouseEnter={() => setHovered(true)}
							onMouseLeave={() => setHovered(false)}
						>
							<img src={TwitterIcon} alt="Twitter logo" />
						</SocialButton>
						<SocialButton
							onMouseEnter={() => setHovered(true)}
							onMouseLeave={() => setHovered(false)}
						>
							<img src={InstagramIcon} alt="Instagram logo" />
						</SocialButton>
						<SocialButton
							onMouseEnter={() => setHovered(true)}
							onMouseLeave={() => setHovered(false)}
						>
							<img src={LinkedinIcon} alt="Linkedin logo" />
						</SocialButton>
					</Socials>
				</div>
			</Grid>

			<CopyRight>&copy; MrToro. All rights reserved</CopyRight>
		</Wrapper>
	);
};
