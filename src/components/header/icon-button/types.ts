// packages
import React from 'react';
import { IVariantHeader } from '@comp/header/types';

export interface IHeaderIconButtonProps {
	onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
	icon: React.ReactElement;
	variant?: IVariantHeader;
}
