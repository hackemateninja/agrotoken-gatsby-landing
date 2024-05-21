// packages
import { IconButton } from '@chakra-ui/react';
import React, { FC } from 'react';

// types
import { IHeaderIconButtonProps } from './types';

// icon button header
const HeaderIconButton: FC<IHeaderIconButtonProps> = ({
	onClick,
	variant,
	icon,
}) => {
	return (
		<IconButton
			padding={2}
			border="none"
			borderRadius={2}
			aria-label="Call Sage"
			fontSize="18px"
			color="gray.500"
			boxShadow="none"
			onClick={onClick}
			icon={icon}
			_hover={{
				backgroundColor: variant === 'Teaser' ? 'transparent' : 'white',
			}}
			_focus={{
				backgroundColor: variant === 'Teaser' ? 'transparent' : 'white',
			}}
			sx={{
				'svg > path': {
					stroke: variant === 'Teaser' ? 'white' : 'gray.500',
				},
			}}
		/>
	);
};

export default HeaderIconButton;
