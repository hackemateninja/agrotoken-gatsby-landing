import { ILinkItem } from '@def/ILinkItem';
import { IVariantHeader } from '@comp/header/types';

export interface IHeaderMenuProps {
	onItemClose?: () => void;
	items: Array<ILinkItem>;
	variant?: IVariantHeader;
}
