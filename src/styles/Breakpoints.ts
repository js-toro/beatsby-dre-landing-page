export type Device = "mobile" | "tablet" | "laptop" | "desktop";

export type BreakpointsTypes = {
	[device in Device]: {
		small: string;
		medium: string;
		large: string;
	};
};

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
