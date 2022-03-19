// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: "Frontend Army",
	tagline: "Session Notes",
	url: "https://frontend.army",
	baseUrl: "/",
	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",
	favicon: "img/favicon.png",
	organizationName: "Frontend Army", // Usually your GitHub org/user name.
	projectName: "Sessions", // Usually your repo name.

	presets: [
		[
			"classic",
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: require.resolve("./sidebars.js"),
					// Please change this to your repo.
					editUrl:
						"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
				},
				blog: {
					showReadingTime: true,
					// Please change this to your repo.
					editUrl:
						"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
				},
				theme: {
					customCss: require.resolve("./src/css/custom.css"),
				},
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			navbar: {
				title: "Frontend Army",
				logo: {
					alt: "Frontend Army Logo",
					src: "img/favicon.png",
				},
				items: [
					{
						type: "doc",
						docId: "intro",
						position: "left",
						label: "Tutorial",
					},
					{ to: "/blog", label: "Notes", position: "left" },
					{
						href: "https://github.com/FrontendArmy/learnings",
						label: "GitHub",
						position: "right",
					},
				],
			},
			footer: {
				style: "dark",
				links: [
					// {
					// 	title: "Docs",
					// 	items: [
					// 		{
					// 			label: "Tutorial",
					// 			to: "/docs/intro",
					// 		},
					// 	],
					// },
					{
						title: "Community",
						items: [
							{
								label: "Discord",
								href: "https://t.co/DnIy4SeaFg",
							},
							{
								label: "Twitter",
								href: "https://twitter.com/FrontendArmy",
							},
						],
					},
					{
						title: "More",
						items: [
							// {
							// 	label: "Blog",
							// 	to: "/blog",
							// },
							{
								label: "GitHub",
								href: "https://github.com/FrontendArmy",
							},
						],
					},
				],
				copyright: `Copyright © ${new Date().getFullYear()} Frontend Army. Built with Docusaurus.`,
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
		}),
};

module.exports = config;
