// packages
import { Flex, Heading } from '@chakra-ui/react';
import { useIntl } from 'gatsby-plugin-react-intl';
import React, { FC } from 'react';

// components
import RateValues from '@comp/home/rate-values';

// svg
import Grains from '@svg/grains.svg';

//component that show rates section in the index page
const Rates: FC = () => {
	const intl = useIntl();

	return (
		<Flex
			bgColor="gray.50"
			maxW="full"
			alignSelf="stretch"
			flexDir="column"
			alignItems="center"
			px={{ base: 4, md: 10 }}
			py={{ base: 10, lg: 24 }}
		>
			<Heading
				as="h3"
				maxW="7xl"
				fontWeight="medium"
				mb={5}
				fontSize={{ base: '2xl', lg: '5xl' }}
				textAlign={{ base: 'left', lg: 'center' }}
			>
				{intl.formatMessage({ id: 'agrotokens.heading' })}
			</Heading>
			<Heading
				as="h3"
				maxW="3xl"
				color="gray.700"
				mb={12}
				fontWeight="normal"
				fontSize={{ base: 'lg', lg: 'xl' }}
				textAlign={{ base: 'left', lg: 'center' }}
			>
				{intl.formatMessage({ id: 'agrotokens.subheading' })}
			</Heading>
			<Grains />
			<Heading
				as="h4"
				maxW="3xl"
				color="gray.700"
				mt={5}
				mb={8}
				fontWeight="medium"
				fontSize={{ base: 'lg', lg: 'xl' }}
				textAlign={{ base: 'left', lg: 'center' }}
			>
				{intl.formatMessage({ id: 'agrotokens.conversion' })}
			</Heading>
			<RateValues isShadow={true} />
		</Flex>
	);
};
export default Rates;
