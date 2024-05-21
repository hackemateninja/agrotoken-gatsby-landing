// packages
import type { ResponsiveValue } from '@chakra-ui/react';
import { ReactElement } from 'react';
import { IVariantHeader } from '@comp/header/types';

export interface IIconFeatureProps {
	variant?: IVariantHeader;
	title: string;
	description?: string;
	icon: ReactElement;
	position: string | undefined;
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	textAlign: ResponsiveValue<Property.TextAlign> | undefined;
}

export interface IIconFeatureItem {
	id: string;
	icon?: ReactElement;
	title: string;
	desc?: string;
	badge?: ReactElement;
}
