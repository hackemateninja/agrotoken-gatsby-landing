// packages
import {Button, Flex, Link} from '@chakra-ui/react';
import {FormattedMessage} from "gatsby-plugin-react-intl";
import React from 'react';

//components
import { IIconFeatureItem } from '@comp/icon-feature/types';
import {IAsk} from "@comp/visa/ask/types";

//types
import { IStep } from '@comp/visa/steps/types';

// svg
import AppStore from '@svg/app-store.svg';
import PlayStore from '@svg/play-store.svg';
import VE from '@svg/visa-easy.svg';
import VW from '@svg/visa-when.svg';
import VS from '@svg/visa-secure.svg';
import VSM from '@svg/visa-smile.svg';

const visaData: Array<IIconFeatureItem> = [
	{
		id: '1',
		title: 'visa.card1Title',
		desc: 'visa.card1Desc',
		icon: <VE />,
	},
	{
		id: '2',
		title: 'visa.card2Title',
		desc: 'visa.card2Desc',
		icon: <VW />,
	},
	{
		id: '3',
		title: 'visa.card3Title',
		desc: 'visa.card3Desc',
		icon: <VS />,
	},
	{
		id: '4',
		title: 'visa.card4Title',
		desc: 'visa.card4Desc',
		icon: <VSM />,
	},
];

const visaAsk: Array<IAsk> = [
	{
		id: '1',
		title: 'visa.ask1Title',
		desc: 'visa.ask1Desc',
		items: []
	},
	{
		id: '2',
		title: 'visa.ask2Title',
		desc: 'visa.ask2Desc',
		items: []
	},
	{
		id: '3',
		title: 'visa.ask3Title',
		desc: 'visa.ask3Desc',
		items: [
			{
				id: "1",
				text: "visa.askItem1"
			},
			{
				id: "2",
				text: "visa.askItem2"
			},
			{
				id: "3",
				text: "visa.askItem3"
			},
			{
				id: "4",
				text: "visa.askItem4"
			}
		]
	}
];

const visaSteps: Array<IStep> = [
	{
		id: '1',
		imgTitle: 'visa.step1',
		img: '/images/step1visa.png',
		title: 'visa.step1Title',
		desc: 'visa.step1Desc',
		element: <Button as='a' href='https://platform.agrotoken.io/sign-up' variant="primary"><FormattedMessage id='visa.step1Button'/></Button>,
	},
	{
		id: '2',
		imgTitle: 'visa.step2',
		img: '/images/step2visa.png',
		title: 'visa.step2Title',
		desc: 'visa.step2Desc',
		element: (
			<Flex w="100%" alignItems="center" justifyContent="center" gap="17px">
				<Link href='https://apps.apple.com/ar/app/agrotoken/id1633310817' target='_blank'><AppStore /></Link>
				<Link href='https://play.google.com/store/apps/details?id=com.agrotoken.android' target='_blank'><PlayStore /></Link>
			</Flex>
		),
	},
	{
		id: '3',
		imgTitle: 'visa.step3',
		img: '/images/step3visa.png',
		title: 'visa.step3Title',
		desc: 'visa.step3Desc',
		element: undefined,
	},
];

export { visaData, visaSteps, visaAsk };
