// packages
import {
	Button,
	Container,
	Flex,
	Heading,
	Input,
	Text,
	FormControl,
	AlertIcon,
	Alert,
} from '@chakra-ui/react';
import { useIntl } from 'gatsby-plugin-react-intl';
import React, { FC } from 'react';

//types
import { ISubscribeProps } from './types';
import SubscriptionForm from '@comp/subscription-form';

// subscribe mailchimp form
const Subscribe: FC<ISubscribeProps> = () => {
	const intl = useIntl();

	return (
		<Container bgColor="gray.800" maxW="full" px={{ base: 4, lg: 28 }} py={12}>
			<Flex
				maxW="7xl"
				mx="auto"
				flexDir={{ base: 'column', lg: 'row' }}
				justifyContent={'space-between'}
				alignItems={{ base: 'flex-start', lg: 'center' }}
			>
				<Flex w={{ base: 'full', lg: 'auto' }} flexDir="column">
					<Heading color="gray.25" mb={4} fontSize={{ base: 18, lg: 24 }}>
						{intl.formatMessage({ id: 'newsletter.heading' })}
					</Heading>
					<Text color="gray.100" mb={4} fontSize={{ base: 16, lg: 18 }}>
						{intl.formatMessage({ id: 'newsletter.subheading' })}
					</Text>
				</Flex>
				<Container p={0} m={0} w={{ base: 'full', lg: '46%' }}>
					<SubscriptionForm
						variant="Global"
						errorMessage={intl.formatMessage({ id: 'contact.error.email' })}
						placeholder={intl.formatMessage({ id: 'newsletter.placeholder' })}
						buttonText={intl.formatMessage({ id: 'newsletter.button' })}
					/>
				</Container>
			</Flex>
		</Container>
	);
};
export default Subscribe;
