// packages
import { Flex, Box, Heading, Text, Image, Link } from '@chakra-ui/react';
import { useIntl } from 'gatsby-plugin-react-intl';
import React, { FC } from 'react';

// data
import bepart from '@data/bepart';

// types
import { IBePartItem } from './types';

// be part section main page
const BePart: FC = () => {
	const intl = useIntl();

	return (
		<Flex
			id="be-part"
			maxW="7xl"
			mx="auto"
			pt={{ base: 10, lg: 32 }}
			px={{ base: 4, lg: 0 }}
			gap={{ base: 4, md: 12 }}
			flexDir={{ base: 'column', lg: 'row' }}
			justifyContent="space-between"
		>
			<Box>
				<Text mb={3} color="success.700">
					Features
				</Text>
				<Heading
					mb={5}
					color="gray.700"
					fontWeight="medium"
					fontSize={{ base: '2xl', lg: '5xl' }}
				>
					{intl.formatMessage({ id: 'bepart.heading' })}
				</Heading>
				<Text
					lineHeight="1.75rem"
					color="gray.700"
					fontSize={{ base: 'lg', lg: 'xl' }}
				>
					{intl.formatMessage({ id: 'bepart.subheading' })}
				</Text>
				<Image
					src="/images/bepart.png"
					alt="be part"
					mt={{ base: 10, lg: 0 }}
					mb={{ base: 8, lg: 0 }}
				/>
			</Box>
			<Box>
				{bepart.map((d: IBePartItem) => (
					<Box key={d.id} mb={12}>
						<Heading fontSize="2xl" color="gray.900" mb={2} fontWeight="medium">
							{intl.formatMessage({ id: d.title })}
						</Heading>
						<Text lineHeight="1.5rem" fontSize="md" mb={4} textColor="gray.700">
							{intl.formatMessage({ id: d.desc })}
						</Text>
						{d.link.length > 0 ? (
							<Link
								color="success.700"
								target="_blank"
								href={intl.formatMessage({ id: d.link })}
								_hover={{ color: 'success.800' }}
							>
								<Text mr={2} as="span" display="inline">
									{intl.formatMessage({ id: 'bepart.register' })}
								</Text>
							</Link>
						) : null}
					</Box>
				))}
			</Box>
		</Flex>
	);
};
export default BePart;
