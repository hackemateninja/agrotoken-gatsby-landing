// packages
import React from 'react';
import { IBlockChainData } from '@comp/home/blockchain/types';

// svg
import Decentralized from '@svg/decentralized.svg';
import Safe from '@svg/safe.svg';
import Transparent from '@svg/transparent.svg';

const blockchain: IBlockChainData = {
	items: [
		{
			id: '1',
			title: 'blockchain.title1',
			desc: 'blockchain.description1',
			icon: <Transparent />,
		},
		{
			id: '2',
			title: 'blockchain.title2',
			desc: 'blockchain.description2',
			icon: <Decentralized />,
		},
		{
			id: '3',
			title: 'blockchain.title3',
			desc: 'blockchain.description3',
			icon: <Safe />,
		},
	],
	tools: [
		{
			id: '1',
			alt: 'ethereum',
			image: '/images/tools/ethereum.png',
		},
		{
			id: '2',
			alt: 'polygon',
			image: '/images/tools/polygon.png',
		},
		{
			id: '3',
			alt: 'algoran',
			image: '/images/tools/algoran.png',
		},
	],
	contracts: [
		{
			id: '1',
			link: 'https://etherscan.io/token/0xb99c9e436a630202e40c90ba9b65dcb610200066',
			text: 'SOYA',
		},
		{
			id: '2',
			link: 'https://etherscan.io/token/0x891fde3771f8095e437754fc1a4aad6937378491',
			text: 'CORA',
		},
		{
			id: '3',
			link: 'https://etherscan.io/token/0x1d48257386165d44e303c579386c46089b2775f5',
			text: 'WHEA',
		},
	],
};
export default blockchain;
