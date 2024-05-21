// packages
import React from 'react';
import { IIconFeatureItem } from '@comp/icon-feature/types';

// svg
import Ease from '@svg/ease-teaser.svg';
import When from '@svg/when-teaser.svg';
import Secure from '@svg/secure-teaser.svg';

const teaser: Array<IIconFeatureItem> = [
	{
		id: '1',
		title: 'teaser.easeTitle',
		desc: 'teaser.easeDesc',
		icon: <Ease />,
	},
	{
		id: '2',
		title: 'teaser.whenTitle',
		desc: 'teaser.whenDesc',
		icon: <When />,
	},
	{
		id: '3',
		title: 'teaser.secureTitle',
		desc: 'teaser.secureDesc',
		icon: <Secure />,
	},
];
export default teaser;
