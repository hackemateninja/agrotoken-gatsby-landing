import { IVariantHeader } from '@comp/header/types';

export interface IDeveloperProps {
	name: string;
	onClick: () => void;
	variant?: IVariantHeader;
}
