import React from 'react';
import { ISectionListDataItem } from '@comp/section-list/types';
import Use1 from '@svg/use1.svg';
import Use2 from '@svg/use2.svg';
import Use3 from '@svg/use3.svg';

const homeSections: Array<ISectionListDataItem> = [
	{
		id: '1',
		stage: 1,
		title: 'use.first.heading',
		desc: 'use.first.subheading',
		isReverse: false,
		icon: <Use1 />,
		items: [
			{
				id: '1',
				text: 'use.first.list.1',
			},
			{
				id: '2',
				text: 'use.first.list.2',
			},
			{
				id: '3',
				text: 'use.first.list.3',
			},
		],
	},
	{
		id: '2',
		stage: 2,
		title: 'use.second.heading',
		desc: 'use.second.subheading',
		isReverse: true,
		icon: <Use2 />,
		items: [
			{
				id: '1',
				text: 'use.second.list.1',
			},
			{
				id: '2',
				text: 'use.second.list.2',
			},
			{
				id: '3',
				text: 'use.second.list.3',
			},
		],
	},
	{
		id: '3',
		stage: 0,
		title: 'use.third.heading',
		desc: 'use.third.subheading',
		isReverse: false,
		icon: <Use3 />,
		items: [
			{
				id: '1',
				text: 'use.third.list.1',
			},
			{
				id: '2',
				text: 'use.third.list.2',
			},
			{
				id: '3',
				text: 'use.third.list.3',
			},
		],
	},
];

export default homeSections;
