import { ILink } from '@comp/footer/item/types';
import { IVariantHeader } from '@comp/header/types';

export interface IItems {
	title: string;
	links?: Array<ILink>;
}

export interface IFooterProps {
	variant?: IVariantHeader;
}
