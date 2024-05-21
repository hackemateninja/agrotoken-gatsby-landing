import { IIconFeatureItem } from '@comp/icon-feature/types';
import { IVariantHeader } from '@comp/header/types';
export type ColumnsVariant = 3 | 4 | 5;

export interface IIconFeatureSectionProps {
	items: Array<IIconFeatureItem>;
	columns?: ColumnsVariant;
	variant?: IVariantHeader;
}
