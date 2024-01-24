/**
 * Breakpoints.ts
 *
 * This file contains the breakpoint definitions for the application.
 *
 * @file This file contains the breakpoint definitions for the application.
 * @author [Jose Toro]
 * @date Created on 24-01-2023
 */

/**
 * Type definition for devices.
 */
export type Device = "mobile" | "tablet" | "laptop" | "desktop";

/**
 * Type definition for breakpoints.
 * Each device has a small, medium, and large breakpoint.
 *
 * @date Created on 24-01-2023
 */
export type BreakpointsTypes = {
	[device in Device]: {
		small: string;
		medium: string;
		large: string;
	};
};

/**
 * Object that defines the breakpoints used in the application.
 * These values are commonly used in responsive design to adjust layout based on screen size.
 *
 * @date Created on 24-01-2023
 */
export const Breakpoints: BreakpointsTypes = {
	mobile: {
		small: "320px",
		medium: "380px",
		large: "425px",
	},
	tablet: {
		small: "576px",
		medium: "768px",
		large: "992px",
	},
	laptop: {
		small: "1024px",
		medium: "1200px",
		large: "1440px",
	},
	desktop: {
		small: "1600px",
		medium: "1920px",
		large: "2560px",
	},
};
