// packages
import { Heading, Text } from '@chakra-ui/react';
import { useIntl } from 'gatsby-plugin-react-intl';
import React, { FC } from 'react';

// components
import { ITitleOptionsProps } from '@comp/title-options/types';

const TitleOptions: FC<ITitleOptionsProps> = ({
	title,
	description,
	helpText,
}) => {
	const intl = useIntl();

	return (
		<>
			{helpText ? (
				<Text color="primary.700" fontWeight="semi-bold" mt={12} mb={3}>
					{intl.formatMessage({ id: helpText })}
				</Text>
			) : null}
			{title ? (
				<Heading
					as="h3"
					fontSize={{ base: '24px', lg: '48px' }}
					fontWeight="medium"
					mb={5}
				>
					{intl.formatMessage({ id: title })}
				</Heading>
			) : null}
			{description ? (
				<Text
					mb={{ base: 5, lg: '71px' }}
					color="gray.700"
					fontSize={{ base: '18px', lg: '20px' }}
				>
					{intl.formatMessage({ id: description })}
				</Text>
			) : null}
		</>
	);
};
export default TitleOptions;
