import { IItems } from '@comp/footer/types';

const FooterMenuData: Array<IItems> = [
	{
		title: 'footer.menu.title',
		links: [
			{
				title: 'footer.menu.home',
				url: 'links.home.url',
			},
			{
				title: 'footer.menu.wedo',
				url: 'links.we-do.url',
			},
			{
				title: 'footer.menu.usecases',
				url: 'links.use-cases.url',
			},
			{
				title: 'footer.menu.bepart',
				url: 'links.be-part.url',
			},
		],
	},
	{
		title: 'footer.agrotoken.title',
		links: [
			{
				title: 'footer.agrotoken.whitepaper',
				url: 'whitePaperUrl',
				isExternal: true,
			},
			{
				title: 'footer.agrotoken.help',
				url: 'helpCenterUrl',
				isExternal: true,
			},
			{
				title: 'footer.agrotoken.access',
				url: 'loginUrl',
				isExternal: true,
			},
			{
				title: 'footer.agrotoken.register',
				url: 'signupUrl',
				isExternal: true
			},
			{
				title: 'links.affiliated.text',
				url: 'links.affiliated.url',
			},
		],
	},
	{
		title: 'footer.institucional.title',
		links: [
			{
				title: 'footer.institucional.terms.text',
				url: 'termsAndCondsUrl',
			},
			{
				title: 'footer.institucional.privacy',
				url: 'privacyUrl',
			},
			{
				title: 'footer.institucional.cookies',
				url: 'cookiesUrl',
			},
			{
				title: 'footer.institucional.contact.text',
				url: 'footer.institucional.contact.url',
			},
			{
				title: 'footer.institucional.press',
				url: 'footer.socialLinks.mailTo',
				isExternal: true,
			},
			{
				title: 'footer.institucional.bases',
				url: 'footer.socialLinks.conditions',
				isExternal: true,
			},
		],
	},
	{
		title: 'footer.social.title',
		links: [
			{
				title: 'footer.social.twitter',
				url: 'footer.socialLinks.twitter',
				isExternal: true,
			},
			{
				title: 'footer.social.instagram',
				url: 'footer.socialLinks.instagram',
				isExternal: true,
			},
			{
				title: 'footer.social.linkedIn',
				url: 'footer.socialLinks.linkedIn',
				isExternal: true,
			},
		],
	},
];

export default FooterMenuData;
