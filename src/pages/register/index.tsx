//packages
import {
	Button,
	Center,
	Container,
	Divider,
	Flex,
	Heading,
	Image,
	Text,
	Link,
} from '@chakra-ui/react';
import { useIntl } from 'gatsby-plugin-react-intl';
import React, { FC } from 'react';

// layouts
import Global from '@layouts/global';
import URLS from '@config/urls';

// register page
const RegisterPage: FC = () => {
	const intl = useIntl();
	const locale = intl.locale;

	return (
		<Global>
			<Flex flexDir={{ base: 'column', lg: 'row' }} maxW="7xl" py={4} mx="auto">
				<Flex
					flexDir="column"
					pt={16}
					px={{ base: 4, lg: 16 }}
					w={{ base: '100%', lg: '50%' }}
				>
					<Heading
						as="h3"
						fontSize={{ base: 'lg', lg: '3xl' }}
						fontWeight="medium"
						mb={2}
					>
						{intl.formatMessage({ id: 'signUp.title' })}
					</Heading>
					<Text mb={8} color="gray.500" fontSize="md">
						{intl.formatMessage({ id: 'signUp.description' })}
					</Text>
					<Container mb={12} p={0} mx={0}>
						<Link href={`${URLS.baseAppUrl}/sign-up`}>
							<Button variant="primary">
								{intl.formatMessage({ id: 'signUp.buttonText' })}
							</Button>
						</Link>
					</Container>
				</Flex>
				<Center w={{ base: '100%', lg: '50%' }}>
					<Image src="/images/register.png" />
				</Center>
			</Flex>
		</Global>
	);
};
export default RegisterPage;
