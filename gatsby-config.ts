const path = require('path');

require('dotenv').config({
	path: `.env`,
});

module.exports = {
	siteMetadata: {
		siteUrl: 'https://www.agrotoken.io',
		title: 'Agrotoken',
	},
	plugins: [
		{
			resolve: "gatsby-source-graphql",
			options: {
				// Arbitrary name for the remote schema Query type
				typeName: "graphCMS",
				// Field under which the remote schema will be accessible. You'll use this in your Gatsby query
				fieldName: "gcms",
				// Url to query from
				url: process.env.GCMS_CONTENT_API,
			},
		},
		{
			resolve: 'gatsby-plugin-react-svg',
			options: {
				rule: {
					include: /\.svg$/,
				},
			},
		},
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				icon: './static/images/icon.png',
			},
		},
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: './static/images/',
			},
			__key: 'images',
		},
		{
			resolve: 'gatsby-plugin-react-intl',
			options: {
				// lang JSON resource path
				path: path.resolve('src/intl'),
				languages: ['en', 'es', 'pt'],
				defaultLanguage: 'es',
				redirect: false,
				redirectDefaultLanguageToRoot: false,
				ignoredPaths: ['*contact', '/contact/*'],
				fallbackLanguage: 'es',
			},
		},
		{
			resolve: 'gatsby-plugin-mailchimp',
			options: {
				endpoint: process.env.MAILCHIMP_ENDPOINT,
				timeout: 3500,
			},
		},
		{
			resolve: 'gatsby-plugin-google-tagmanager',
			options: {
				id: process.env.TAG_MANAGER_ID,
				includeInDevelopment: false,
				defaultDataLayer: { platform: 'gatsby' },
			},
		},
		{
			resolve: 'gatsby-plugin-google-gtag',
			options: {
				trackingIds: [process.env.GOOGLE_ANALYTICS_ID],
			},
		},
		{
			resolve: '@chakra-ui/gatsby-plugin',
			options: {
				resetCSS: true,
				isUsingColorMode: true,
			},
		},
		{
			resolve: `gatsby-plugin-hotjar`,
			options: {
				includeInDevelopment: true, // optional parameter to include script in development
				id: process.env.HOTJAR_ID,
				sv: process.env.HOTJAR_SNIPPET_VERSION,
			},
		},
		{
			resolve: 'gatsby-plugin-alias-imports',
			options: {
				alias: {
					'@comp': path.resolve('src/components'),
					'@config': path.resolve('src/config'),
					'@data': path.resolve('src/data'),
					'@hooks': path.resolve('src/hooks'),
					'@layouts': path.resolve('src/layouts'),
					'@libs': path.resolve('src/libs'),
					'@pages': path.resolve('src/pages'),
					'@services': path.resolve('src/services'),
					'@store': path.resolve('src/store'),
					'@test': path.resolve('src/test'),
					'@def': path.resolve('src/types'),
					'@utils': path.resolve('src/utils'),
					'@mock': path.resolve('src/test/__mocks__'),
					'@svg': path.resolve('src/components/svgs'),
					'@src': path.resolve('src'),
				},
				extensions: ['js', 'jsx', 'ts', 'tsx', 'css', 'scss'],
			},
		},
	],
};
