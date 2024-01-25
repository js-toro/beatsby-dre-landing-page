/**
 * Footer.tsx
 *
 * This file contains the Footer component of the application.
 *
 * @file This file contains the Footer component of the application.
 * @author [Jose Toro]
 * @date Created on 24-01-2024
 */

import React, { useContext } from 'react';

import { CursorContext } from '../../components/Cursor';
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
} from './Footer.styles';

import BeatsbeLogo from '../../assets/beatsby-logo.png';
import { productsLinks, supportsLinks, socials } from './Footer.data';

/**
 * Footer component of the application.
 *
 * This component includes links to different sections of the website,
 * a subscription form, social media links, and copyright information.
 *
 * @returns {JSX.Element} The rendered Footer component.
 *
 * @date Created on 23-01-2024
 */
export const Footer: React.FC = () => {
	const { setHovered } = useContext(CursorContext);

	return (
		<Wrapper className="container">
			<Grid>
				<HomeImage>
					<a
						href="#"
						onMouseEnter={() => setHovered(true)}
						onMouseLeave={() => setHovered(false)}>
						<img draggable="false" src={BeatsbeLogo} alt="Beatsby Logo" />
					</a>
				</HomeImage>

				<Links>
					<Products>
						<h3>Products</h3>
						{productsLinks.map((product, index) => (
							<a
								key={index}
								href="#"
								onMouseEnter={() => setHovered(true)}
								onMouseLeave={() => setHovered(false)}>
								{product}
							</a>
						))}
					</Products>

					<Support>
						<h3>Supports</h3>
						{supportsLinks.map((support, index) => (
							<a
								key={index}
								href="#"
								onMouseEnter={() => setHovered(true)}
								onMouseLeave={() => setHovered(false)}>
								{support}
							</a>
						))}
					</Support>
				</Links>

				<div>
					<Subscribe>
						<input type="text" placeholder="Email" />
						<SubscribeButton
							onMouseEnter={() => setHovered(true)}
							onMouseLeave={() => setHovered(false)}
							$variant={true}>
							Subscribe
						</SubscribeButton>
					</Subscribe>

					<Socials>
						{socials.map((media, index) => (
							<SocialButton
								key={index}
								onMouseEnter={() => setHovered(true)}
								onMouseLeave={() => setHovered(false)}>
								<img src={media.source} alt={media.alt} />
							</SocialButton>
						))}
					</Socials>
				</div>
			</Grid>

			<CopyRight>&copy; MrToro. All rights reserved</CopyRight>
		</Wrapper>
	);
};
