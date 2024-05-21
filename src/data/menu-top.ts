import { ILinkItem } from '@def/ILinkItem';

const menuTopMobile: Array<ILinkItem> = [
	{
		id: '1',
		url: 'links.home.url',
		text: 'links.home.text',
		isExternal: false,
		isAction: false,
	},
	{
		id: '2',
		url: 'links.prod',
		text: 'links.prod',
		isExternal: false,
		isAction: true,
		isMegaMenu: false,
	},
	{
		id: '3',
		url: 'links.we-do.url',
		text: 'links.we-do.text',
		isExternal: false,
		isAction: false,
	},
	{
		id: '4',
		url: 'links.use-cases.url',
		text: 'links.use-cases.text',
		isExternal: false,
		isAction: false,
	},
	{
		id: '5',
		url: 'helpCenterUrl',
		text: 'links.help.text',
		isExternal: true,
		isAction: false,
	},
	{
		id: '10',
		url: 'links.affiliated.url',
		text: 'links.affiliated.text',
		isExternal: false,
		isAction: false,
	},
	{
		id: '7',
		url: 'whitePaperUrl',
		text: 'links.whitepaper.text',
		isExternal:false,
		isAction: false,
	},
	{
		id: '8',
		url: 'links.developer.url',
		text: 'links.developer.text',
		isExternal: false,
		isAction: true,
		isMegaMenu: false,
	},
];

const menuTop: Array<ILinkItem> = [
	{
		id: '1',
		url: 'links.we-do.url',
		text: 'links.we-do.text',
		isExternal: false,
		isAction: false,
	},
	{
		id: '2',
		url: 'links.prod',
		text: 'links.prod',
		isExternal: false,
		isAction: true,
	},
	{
		id: '3',
		url: 'helpCenterUrl',
		text: 'links.help.text',
		isExternal: true,
		isAction: false,
	},
	{
		id: '4',
		url: 'links.affiliated.url',
		text: 'links.affiliated.text',
		isExternal: false,
		isAction: false,
	},
	{
		id: '5',
		url: 'whitePaperUrl',
		text: 'links.whitepaper.text',
		isExternal: true,
		isAction: false,
	},
	{
		id: '6',
		url: 'links.developer.url',
		text: 'links.developer.text',
		isExternal: false,
		isAction: true,
		isMegaMenu: true,
	},
];

export { menuTopMobile, menuTop };
