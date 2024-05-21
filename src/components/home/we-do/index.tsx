// packages
import { Flex, Heading, HStack, Text } from '@chakra-ui/react';
import { useIntl } from 'gatsby-plugin-react-intl';
import React, { FC } from 'react';

import wedo from '@data/wedo';

// svg
import Cora from '@svg/cora.svg';
import Soya from '@svg/soya.svg';
import Whea from '@svg/whea.svg';
import IconFeatureSection from '@comp/icon-feature-section';

// we do section
const WeDo: FC = () => {
	const intl = useIntl();

	return (
		<Flex
			id="we-do"
			bgColor="gray.50"
			w="100%"
			alignSelf="stretch"
			flexDir="column"
			alignItems={{ base: 'flex-start', lg: 'center' }}
			px={{ base: 4, md: 8 }}
			py={{ base: 10, lg: 24 }}
		>
			<HStack spacing={4} mb={5}>
				<Soya />
				<Cora />
				<Whea />
			</HStack>
			<Heading
				as="h3"
				maxW="7xl"
				fontWeight="medium"
				mb={5}
				fontSize={{ base: '2xl', lg: '5xl' }}
				textAlign={{ base: 'left', lg: 'center' }}
			>
				{intl.formatMessage({ id: 'feature1.heading' })}
			</Heading>
			<Text
				as="p"
				color="gray.700"
				mb={16}
				fontWeight="normal"
				fontSize={{ base: 'lg', lg: 'xl' }}
				textAlign={{ base: 'left', lg: 'center' }}
			>
				{intl.formatMessage({ id: 'feature1.subheading' })}
			</Text>
			<IconFeatureSection columns={3} items={wedo} />
		</Flex>
	);
};
export default WeDo;
