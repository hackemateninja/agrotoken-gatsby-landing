// packages
import React from 'react';
import { IIconFeatureItem } from '@comp/icon-feature/types';

// svg
import Dollar from '@svg/dollar-sign.svg';
import Coin from '@svg/coin-stack.svg';
import Filter from '@svg/filter.svg';
import Clock from '@svg/clock.svg';

const merchantsFeatures: Array<IIconFeatureItem> = [
	{
		id: '1',
		title: 'merchantsBenefits.1',
		icon: <Dollar />,
	},
	{
		id: '2',
		title: 'merchantsBenefits.2',
		icon: <Coin />,
	},
	{
		id: '3',
		title: 'merchantsBenefits.3',
		icon: <Filter />,
	},
	{
		id: '4',
		title: 'merchantsBenefits.4',
		icon: <Clock />,
	},
];
export default merchantsFeatures;
