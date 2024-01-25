/**
 * Colors.ts
 *
 * This file contains the color definitions for the application.
 *
 * @file This file contains the color definitions for the application.
 * @author [Jose Toro]
 * @date Created on 24-01-2023
 */

/**
 * Interface that defines the types of colors.
 *
 * @property {string} primary - Primary color.
 * @property {string} secondary - Secondary color.
 * @property {string} background - Background color.
 * @property {string} backgroundVariant - Variant of the background color.
 * @property {string} backgroundAlpa - Background color with transparency.
 * @property {string} white - White color.
 * @property {string} whiteAlpa - White color with transparency.
 * @property {string} light - Light color.
 */
export interface ColorsTypes {
	primary: string;
	secondary: string;
	background: string;
	backgroundVariant: string;
	backgroundAlpa: string;
	white: string;
	whiteAlpa: string;
	light: string;
}

/**
 * Object that defines the colors used in the application.
 */
export const Colors: ColorsTypes = {
	primary: 'hsl(351, 100%, 55%)',
	secondary: 'rgb(179, 22, 45)',
	background: 'hsl(240, 3%, 6%)',
	backgroundVariant: 'hsl(240, 5%, 12%)',
	backgroundAlpa: 'hsla(240, 3%, 6%, 0.9)',
	white: 'hsl(240, 4%, 95%)',
	whiteAlpa: 'hsla(240, 4%, 95%, 0.5)',
	light: 'hsl(204, 4%, 75%)',
};
