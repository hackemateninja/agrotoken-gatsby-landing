import { IIconFeatureItem } from '@comp/icon-feature/types';

export interface IBlockChainData {
	items: Array<IIconFeatureItem>;
	tools: Array<IBlockChainTool>;
	contracts: Array<IBlockChainContracts>;
}

export interface IBlockChainTool {
	id: string;
	alt: string;
	image: string;
}

export interface IBlockChainContracts {
	id: string;
	link: string;
	text: string;
}
