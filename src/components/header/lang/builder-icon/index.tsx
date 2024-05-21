// packages
import React, { FC } from 'react';

// svg
import ES from '@svg/ES.svg';
import PT from '@svg/PT.svg';
import EN from '@svg/US.svg';

// types
import { IBuilderIconProps } from './types';

// component that returns an icons locale based
const BuilderIcon: FC<IBuilderIconProps> = ({ locale }) => {
	switch (locale) {
		case 'ES':
			return <ES />;
		case 'EN':
			return <EN />;
		case 'PT':
			return <PT />;
		default:
			return <ES />;
	}
};
export default BuilderIcon;
