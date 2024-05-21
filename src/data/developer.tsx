//packages
import React from 'react';

//types
import { IIconFeatureItem } from '@comp/icon-feature/types';

//svgs
import Payments from '@svg/payments.svg';
import Price from '@svg/price.svg';
import Swap from '@svg/swap.svg';
import Loans from '@svg/loans.svg';
import Payouts from '@svg/payouts.svg';
import Wallets from '@svg/wallets.svg';
import Token from '@svg/tokenizacion.svg';
import New from '@svg/new.svg';
import Soon from '@svg/soon.svg';

const developer: Array<IIconFeatureItem> = [
	{
		id: '1',
		title: 'developer.f1Title',
		desc: 'developer.f1Desc',
		icon: <Payments />,
		badge: <New />,
	},
	{
		id: '2',
		title: 'developer.f2Title',
		desc: 'developer.f2Desc',
		icon: <Price />,
		badge: <New />,
	},
	{
		id: '3',
		title: 'developer.f3Title',
		desc: 'developer.f3Desc',
		icon: <Swap />,
		badge: <Soon />,
	},
	{
		id: '4',
		title: 'developer.f4Title',
		desc: 'developer.f4Desc',
		icon: <Loans />,
		badge: <Soon />,
	},
	{
		id: '5',
		title: 'developer.f5Title',
		desc: 'developer.f5Desc',
		icon: <Payouts />,
		badge: <New />,
	},
	{
		id: '6',
		title: 'developer.f6Title',
		desc: 'developer.f6Desc',
		icon: <Wallets />,
		badge: <New />,
	},
	{
		id: '7',
		title: 'developer.f7Title',
		desc: 'developer.f7Desc',
		icon: <Token />,
		badge: <Soon />,
	},
];

export default developer;
