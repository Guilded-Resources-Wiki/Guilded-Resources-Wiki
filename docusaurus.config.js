// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const themes = require('prism-react-renderer').themes;
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

const userWidgetInlinePlugin = require('./src/plugins/userWidgetInlinePlugin');
const inviteWidgetPlugin = require('./src/plugins/inviteWidgetPlugin');
const linebreakPlugins = require('./src/plugins/linebreakPlugin');
const blogAuthorWidgetPlugin = require('./src/plugins/blogAuthorWidgetPlugin');

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: 'Guilded Resources Wiki',
	tagline:
		'A list of tons of useful guilded resources and utilities for all types of users, from beginners to power users.',
	url: 'https://guilded.botlist.xyz',
	baseUrl: '/',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/favicon.ico',
	organizationName: 'Guilded-Resources-Wiki',
	projectName: 'guilded-resources-wiki.github.io',
	trailingSlash: false,

	i18n: {
		defaultLocale: "en",
		locales: ["en", "fr", "de", "es", "tr", "nl", "hi", "sv", "pl"]
	  },

	presets: [
		[
			'@docusaurus/preset-classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					editUrl: 'https://github.com/Guilded-Resources-Wiki/Guilded-Resources-Wiki/edit/main/',
					path: 'wiki',
					routeBasePath: '/',
					remarkPlugins: [linebreakPlugins, inviteWidgetPlugin, userWidgetInlinePlugin],
				},
				blog: {
					path: 'blog',
					routeBasePath: '/blog/',
					showReadingTime: true,
					remarkPlugins: [
						linebreakPlugins,
						inviteWidgetPlugin,
						blogAuthorWidgetPlugin,
						userWidgetInlinePlugin,
					],
				},
				theme: {
					customCss: [
						require.resolve('inter-ui/inter.css'),
						require.resolve('./src/css/custom.css'),
					],
				},
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			// We don't set the description and title here to assure that the right og:tags will be delivered per page.
			metadata: [
				{
					name: 'og:image',
					content: 'img/logo-background.png',
				},
				{
					name: 'theme-color',
					content: '#C272CC',
				},
				{
					name: 'twitter:card',
					content: 'summary',
				},
			],
			colorMode: {
				defaultMode: 'dark',
				disableSwitch: false,
				respectPrefersColorScheme: true,
			},
			navbar: {
				title: 'Discord Resources',
				logo: {
					alt: 'Discord Resources Logo',
					src: 'img/logo-small.png',
					href: '/',
				},
				items: [
					{
						to: '/',
						label: 'Wiki',
						position: 'left',
					},
					{
						to: 'blog',
						label: 'Blog',
						position: 'left',
					},
					{
						href: 'https://github.com/Guilded-Resources-Wiki/Guilded-Resources-Wiki',
						className: 'navbar-item-github',
						position: 'right',
					},
					{
						href: 'https://guilded.gg/grw',
						className: 'navbar-item-guilded',
						position: 'right',
					},
					{
						type: 'localeDropdown',
						position: 'right',
					}
				],
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
			algolia: {
				// The application ID provided by Algolia
				appId: 'LERFWVNJO4',

				// Public API key: it is safe to commit it
				apiKey: '04be95df71409026f44a4db9bcf3b82c',

				indexName: 'guildedresourceswiki',
			},
		}),
};

module.exports = config;
