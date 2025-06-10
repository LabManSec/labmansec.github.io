import type {
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "LabManSec",
	subtitle: "Welcome to the lab...",
	lang: "en", // 'en', 'zh_CN', 'zh_TW', 'ja', 'ko', 'es', 'th'
	themeColor: {
		hue: 290, // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
		fixed: false, // Hide the theme color picker for visitors
	},
	banner: {
		enable: false,
		src: "assets/images/jace.jpg", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
		position: "top", // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
		credit: {
			enable: true, // Display the credit text of the banner image
			text: "Jason Chan", // Credit text to be displayed
			url: "", // (Optional) URL link to the original artwork or artist's page
		},
	},
	toc: {
		enable: true, // Display the table of contents on the right side of the post
		depth: 2, // Maximum heading depth to show in the table, from 1 to 3
	},
	favicon: [
		// Leave this array empty to use the default favicon
		//{
			//src: '/favicon/icons8-test-tube-ios-17-filled-96.png',    // Path of the favicon, relative to the /public directory
			//theme: 'light',              // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
			//sizes: '32x32',              // (Optional) Size of the favicon, set only if you have favicons of different sizes
		//}
		{
			src: "/favicon/icons8-test-tube-ios-17-filled-32.png",
			theme: "dark",
			sizes: "32x32",
		},
		{
			src: "/favicon/icons8-test-tube-ios-17-filled-72.png",
			theme: "dark",
			sizes: "72x72",
		},
		{
			src: "/favicon/icons8-test-tube-ios-17-filled-96.png",
			theme: "dark",
			sizes: "96x96",
		},		{
			src: "/favicon/icons8-test-tube-ios-17-outlined-32.png",
			theme: "light",
			sizes: "32x32",
		},
		{
			src: "/favicon/icons8-test-tube-ios-17-outlined-72.png",
			theme: "light",
			sizes: "72x72",
		},
		{
			src: "/favicon/icons8-test-tube-ios-17-outlined-96.png",
			theme: "light",
			sizes: "96x96",
		},
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		//LinkPreset.Home,
		{
			name: "Posts",
			url:"/archive/"
		},
		//LinkPreset.Archive,
		LinkPreset.About,
		{
			name: "GitHub",
			url: "https://github.com/LabManSec", // Internal links should not include the base path, as it is automatically added
			external: true, // Show an external link icon and will open in a new tab
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "assets/images/labman.jpg", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
	name: "LabManSec",
	bio: "Welcome to the lab...",
	links: [
		{
			name: "LinkedIn",
			icon: "fa6-brands:linkedin-in", // Visit https://icones.js.org/ for icon codes
			// You will need to install the corresponding icon set if it's not already included
			// `pnpm add @iconify-json/<icon-set-name>`
			url: "https://linkedin.com/in/labmansec",
		},
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/LabManSec",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};
