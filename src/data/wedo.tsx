// packages
import React from 'react';
import { IIconFeatureItem } from '@comp/icon-feature/types';

// svg
import Efficient from '@svg/eficient.svg';
import Flexible from '@svg/flex.svg';
import Secure from '@svg/secure.svg';

const wedo: Array<IIconFeatureItem> = [
	{
		id: '1',
		title: 'features.title1',
		desc: 'features.description1',
		icon: <Flexible />,
	},
	{
		id: '2',
		title: 'features.title2',
		desc: 'features.description2',
		icon: <Efficient />,
	},
	{
		id: '3',
		title: 'features.title3',
		desc: 'features.description3',
		icon: <Secure />,
	},
];
export default wedo;
