// packages
import { Container, Image, Stack, Text } from '@chakra-ui/react';
import { useIntl } from 'gatsby-plugin-react-intl';
import React, { FC } from 'react';

// data
import press from '@data/press';

//types
import { IPressItem } from './types';

// component to show press logos in the index pages
const Press: FC = () => {
	const intl = useIntl();
	return (
		<Container maxW="full" bgColor="gray.50" p={0}>
			<Container py={10} px={0} mx="auto" maxW="7xl" textAlign="center">
				<Text textColor="gray.500" mb={8}>
					{intl.formatMessage({ id: 'press' })}
				</Text>
			</Container>
			<Stack
				flexWrap="wrap"
				flexDir={{ base: 'column', md: 'row' }}
				spacing={{ base: 4, md: 6 }}
				px={{ base: 4, md: 0 }}
				mx={{ lg: 28 }}
				alignItems={{ base: 'center', md: 'flex-end' }}
				justifyContent="center"
			>
				{press.map((item: IPressItem) => (
					<Image key={item.id} src={item.image} />
				))}
			</Stack>
		</Container>
	);
};
export default Press;
