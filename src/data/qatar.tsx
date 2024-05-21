import React from 'react';
import {IIconFeatureItem} from "@comp/icon-feature/types";
import {Image} from "@chakra-ui/react";

const QatarDataTop: Array<IIconFeatureItem> = [
	{
		id: '1',
		icon: <Image src='/images/star.svg' alt='star'/>,
		title: 'qatar.fItem1Title',
		desc: 'qatar.fItem1Desc'
	},
	{
		id: '2',
		icon: <Image src='/images/ball.svg' alt='star'/>,
		title: 'qatar.fItem2Title',
		desc: 'qatar.fItem2Desc'
	},
	{
		id: '3',
		icon: <Image src='/images/tiket.svg' alt='star'/>,
		title: 'qatar.fItem3Title',
		desc: 'qatar.fItem3Desc'
	}
]


export {
	QatarDataTop
}
