import FacebookIcon from '../../assets/facebook-icon.svg';
import TwitterIcon from '../../assets/twitter-icon.svg';
import InstagramIcon from '../../assets/instagram-icon.svg';
import LinkedinIcon from '../../assets/linkedin-icon.svg';

/**
 * Array of strings representing the product links.
 * @type {string[]}
 */
export const productsLinks: string[] = [
	'Headphones',
	'Earphones',
	'Earbuds',
	'Accessories',
];

/**
 * Array of strings representing the support links.
 * @type {string[]}
 */
export const supportsLinks: string[] = [
	'Product help',
	'Register',
	'Updates',
	'Providers',
];

/**
 * Array of objects representing the social media links.
 * Each object has a 'source' property which is the path to the social media icon,
 * and an 'alt' property which is the alternative text for the icon.
 * @type {{source: string, alt: string}[]}
 */
export const socials: {
	source: string;
	alt: string;
}[] = [
	{ source: FacebookIcon, alt: 'Facebook Icon' },
	{ source: TwitterIcon, alt: 'Twitter Icon' },
	{ source: InstagramIcon, alt: 'Instagram Icon' },
	{ source: LinkedinIcon, alt: 'Linkedin Icon' },
];
