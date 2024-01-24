/**
 * Footer.styles.ts
 *
 * This file contains the style definitions for the Footer component.
 *
 * @file This file contains the style definitions for the Footer component.
 * @author [Jose Toro]
 * @date Created on 24-01-2023
 */

import styled from "styled-components";
import { Colors, Button } from "../../styles";
import { Breakpoints } from "../../styles";

import SendIcon from "../../assets/send-icon.svg";

/**
 * Wrapper component for the footer.
 * 
 * This component styles the footer, including margins and font styles.
 * 
 * @component
 * @example
 * return (
 *   <Wrapper>
 *     <h3>Title</h3>
 *     <p>Some text</p>
 *   </Wrapper>
 * )
 */
export const Wrapper = styled.footer`
	margin: 2.4rem auto;

	@media (min-width: ${Breakpoints.tablet.medium}) {
		margin: 4rem auto;
	}

	h3 {
		font-weight: 600;
		font-size: 2rem;
		line-height: 3rem;
	}

	p {
		font-weight: 400;
		font-size: 1.5rem;
		line-height: 2.2rem;
	}
`;

/**
 * Grid component for the footer.
 * 
 * This component styles the grid layout of the footer. It uses CSS grid to 
 * create a responsive layout that adjusts based on the screen size.
 * 
 * @component
 * @example
 * return (
 *   <Grid>
 *     <div>Content 1</div>
 *     <div>Content 2</div>
 *     <div>Content 3</div>
 *   </Grid>
 * )
 */
export const Grid = styled.div`
	display: grid;
	gap: 3rem;

	@media (min-width: ${Breakpoints.tablet.large}) {
		grid-template-columns: 2fr 5fr 5fr;
	}
`;

/**
 * HomeImage component for the footer.
 * 
 * This component styles the home image section of the footer. It uses CSS flexbox 
 * to center the image within the div.
 * 
 * @component
 * @example
 * return (
 *   <HomeImage>
 *     <img src="image_url" alt="description" />
 *   </HomeImage>
 * )
 */
export const HomeImage = styled.div`
	display: flex;
	justify-content: center;
`;

/**
 * Links component for the footer.
 * 
 * This component styles the links section of the footer. It uses CSS flexbox 
 * to create a responsive layout that adjusts based on the screen size. On mobile, 
 * the links are displayed in a column, and on larger screens, they are displayed in a row.
 * 
 * @component
 * @example
 * return (
 *   <Links>
 *     <a href="#">Link 1</a>
 *     <a href="#">Link 2</a>
 *     <a href="#">Link 3</a>
 *   </Links>
 * )
 */
export const Links = styled.div`
	display: flex;
	flex-direction: column;
	gap: 3rem;

	@media (min-width: ${Breakpoints.mobile.medium}) {
		flex-direction: row;
		justify-content: space-around;
		gap: 0;
	}

	@media (min-width: ${Breakpoints.tablet.medium}) {
		gap: 3rem;
	}
`;

/**
 * Subscribe component for the footer.
 * 
 * This component styles the subscription form in the footer. It uses CSS flexbox 
 * to create a responsive layout that adjusts based on the screen size. On mobile, 
 * the input and button are displayed in a column, and on larger screens, they are displayed in a row.
 * 
 * @component
 * @example
 * return (
 *   <Subscribe>
 *     <input type="email" placeholder="Your email" />
 *     <button>Subscribe</button>
 *   </Subscribe>
 * )
 */
export const Subscribe = styled.div`
	background-color: ${Colors.backgroundVariant};
	width: 100%;
	padding: 0.8rem;
	border-radius: 8px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 2rem;

	@media (min-width: ${Breakpoints.mobile.medium}) {
		flex-direction: row;
	}

	input {
		background-color: transparent;
		width: 100%;
		border: none;
		padding: 1rem;
		color: ${Colors.light};
		font-family: "Poppins", sans-serif;
		font-weight: 400;
		font-size: 1.5rem;
		line-height: 2.2rem;
	}
`;

/**
 * LinksColumn component for the footer.
 * 
 * This component styles the column of links in the footer. It uses CSS flexbox 
 * to create a column layout. The gap between the links is set to 1rem. On larger screens, 
 * the column grows to take up more space. The text decoration for the links is removed.
 * 
 * @component
 * @example
 * return (
 *   <LinksColumn>
 *     <a href="#">Link 1</a>
 *     <a href="#">Link 2</a>
 *     <a href="#">Link 3</a>
 *   </LinksColumn>
 * )
 */
export const LinksColumn = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;

	@media (min-width: ${Breakpoints.tablet.large}) {
		flex-grow: 1;
	}

	a {
		text-decoration: none;
	}
`;

/**
 * Products component for the footer.
 * 
 * This component styles the products links column in the footer. It extends the 
 * LinksColumn component, so it inherits all of its styles.
 * 
 * @component
 * @example
 * return (
 *   <Products>
 *     <a href="#">Product 1</a>
 *     <a href="#">Product 2</a>
 *     <a href="#">Product 3</a>
 *   </Products>
 * )
 */
export const Products = styled(LinksColumn)``;

/**
 * Support component for the footer.
 * 
 * This component styles the support links column in the footer. It extends the 
 * LinksColumn component, so it inherits all of its styles.
 * 
 * @component
 * @example
 * return (
 *   <Support>
 *     <a href="#">Support 1</a>
 *     <a href="#">Support 2</a>
 *     <a href="#">Support 3</a>
 *   </Support>
 * )
 */
export const Support = styled(LinksColumn)``;

/**
 * SubscribeButton component for the footer.
 * 
 * This component styles the subscribe button in the footer. It extends the 
 * Button component, so it inherits all of its styles. The button contains an 
 * icon and text, which are centered using CSS flexbox. The icon is added using 
 * the ::before pseudo-element.
 * 
 * @component
 * @example
 * return (
 *   <SubscribeButton>
 *     Subscribe
 *   </SubscribeButton>
 * )
 */
export const SubscribeButton = styled(Button)`
	display: flex;
	align-items: center;
	gap: 1rem;

	&::before {
		content: url(${SendIcon});
		height: 18px;
	}
`;

/**
 * Socials component for the footer.
 * 
 * This component styles the social media links section in the footer. It uses CSS flexbox 
 * to create a responsive layout that adjusts based on the screen size. On mobile, 
 * the links are centered, and on larger screens, they are aligned to the start.
 * 
 * @component
 * @example
 * return (
 *   <Socials>
 *     <a href="#"><img src="facebook_icon_url" alt="Facebook" /></a>
 *     <a href="#"><img src="twitter_icon_url" alt="Twitter" /></a>
 *     <a href="#"><img src="instagram_icon_url" alt="Instagram" /></a>
 *   </Socials>
 * )
 */
export const Socials = styled.div`
	display: flex;
	justify-content: center;
	gap: 2rem;
	margin: 3.2rem 0;

	@media (min-width: ${Breakpoints.tablet.medium}) {
		justify-content: start;
	}
`;

/**
 * SocialButton component for the footer.
 * 
 * This component styles the social media buttons in the footer. It extends the 
 * Button component, so it inherits all of its styles. The button contains an 
 * image, which is set to fill the entire button and maintain its aspect ratio.
 * 
 * @component
 * @example
 * return (
 *   <SocialButton>
 *     <img src="facebook_icon_url" alt="Facebook" />
 *   </SocialButton>
 * )
 */
export const SocialButton = styled(Button)`
	width: 32px;
	height: 32px;
	padding: 0.6rem;

	img {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}
`;

/**
 * CopyRight component for the footer.
 * 
 * This component styles the copyright text in the footer. The text is centered 
 * and has a margin of 3.2rem on all sides.
 * 
 * @component
 * @example
 * return (
 *   <CopyRight>
 *     © 2022 Company Name. All rights reserved.
 *   </CopyRight>
 * )
 */
export const CopyRight = styled.p`
	margin: 3.2rem;
	text-align: center;
`;
