//packages
import { Text } from '@chakra-ui/react';
import { useIntl } from 'gatsby-plugin-react-intl';
import React, { FC } from 'react';

//types
import { ILinkTextProps } from './types';

const HeaderLinkText: FC<ILinkTextProps> = ({ text, variant }) => {
	const intl = useIntl();
	return (
		<Text
			color={variant === 'Teaser' ? 'white' : 'gray.500'}
			_hover={{ color: variant === 'Teaser' ? 'gray.200' : 'gray.700' }}
		>
			{intl.formatMessage({ id: text })}
		</Text>
	);
};
export default HeaderLinkText;
