// packages
import { Flex, Heading, Text } from '@chakra-ui/react';
import React, { FC } from 'react';

//types
import { IIconFeatureProps } from './types';

// icon that show a description and a title for some features in the index page
const IconFeature: FC<IIconFeatureProps> = ({
	variant,
	title,
	description,
	textAlign,
	icon,
	position,
}) => {
	return (
		<Flex
			gap="20px"
			flexDir="column"
			alignItems={variant === 'Teaser' ? 'center' : position && position}
			mt={0}
			sx={{
				svg: {
					opacity: variant === 'Teaser' ? 0.64 : 1,
				},
			}}
		>
			{icon}
			<Heading
				as="h4"
				color={variant === 'Teaser' ? 'white' : ''}
				textAlign={variant === 'Teaser' ? 'center' : textAlign}
				fontSize="20px"
			>
				{title}
			</Heading>
			{description && (
				<Text
					textAlign={variant === 'Teaser' ? 'center' : textAlign}
					fontSize="md"
					color={variant === 'Teaser' ? 'white' : 'gray.600'}
				>
					{description}
				</Text>
			)}
		</Flex>
	);
};

export default IconFeature;
