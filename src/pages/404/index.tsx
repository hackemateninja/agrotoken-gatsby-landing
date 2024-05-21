// packages
import {
	Button,
	Center,
	Flex,
	Heading,
	Image,
	Text,
	useBreakpointValue,
} from '@chakra-ui/react';
import { Link, navigate } from 'gatsby';
import { useIntl } from 'gatsby-plugin-react-intl';
import React, { FC } from 'react';

// svg
import LogoAgro from '@svg/brand.svg';
import GoBack from '@svg/goback.svg';

// 404 error page
const ErrorPage: FC = () => {
	const intl = useIntl();

	const image = useBreakpointValue({
		base: '/images/404-mobile.png',
		lg: '/images/404-desktop.png',
	});
	return (
		<Flex maxW="7xl" mx="auto" flexDir={{ base: 'column', lg: 'row' }} pt={24}>
			<Flex flexDir="column" pt={16} px={16} w={{ base: '100%', lg: '60%' }}>
				<LogoAgro />
				<Text color="primary.600" fontWeight="semi-bold" mt={12} mb={3}>
					{intl.formatMessage({ id: 'pages.404.error-code' })}
				</Text>
				<Heading
					as="h1"
					fontWeight="normal"
					mb={6}
					fontSize={{ base: '3xl', lg: '6xl' }}
				>
					{intl.formatMessage({ id: 'pages.404.title' })}
				</Heading>
				<Heading
					fontSize={{ base: 'lg', lg: 'xl' }}
					fontWeight="normal"
					color="gray.700"
					as="h3"
					mb={12}
				>
					{intl.formatMessage({ id: 'pages.404.description' })}
				</Heading>

				<Flex flexDir={{ base: 'column', lg: 'row' }}>
					<Button
						onClick={() => navigate(-1)}
						size="lg"
						mb={{ base: 4, lg: 0 }}
					>
						<GoBack />
						<Text ml={3}>{intl.formatMessage({ id: 'buttons.goBack' })}</Text>
					</Button>
					<Link to="/">
						<Button
							variant="primary"
							w={{ base: '100%', lg: 'auto' }}
							size="lg"
							ml={{ base: 0, lg: 4 }}
						>
							<Text ml={3}>{intl.formatMessage({ id: 'buttons.goHome' })}</Text>
						</Button>
					</Link>
				</Flex>
			</Flex>
			<Center w={{ base: '100%', lg: '40%' }}>
				<Image src={image} />
			</Center>
		</Flex>
	);
};
export default ErrorPage;
