// packages
import { Button, Flex, Heading } from '@chakra-ui/react';
import { Link } from 'gatsby';
import { useIntl } from 'gatsby-plugin-react-intl';
import React, { FC } from 'react';

//types
import { IFooterRegisterProps } from './types';

// register footer
const FooterRegister: FC<IFooterRegisterProps> = ({ isRegisterPage }) => {
	const intl = useIntl();

	return (
		<Flex flexDir="column" alignItems="center" px={{ base: 0, lg: 8 }}>
			<Heading
				as="h3"
				fontWeight="normal"
				fontSize={{ base: 'xl', lg: '3xl' }}
				color="white"
				textAlign="center"
				mb={2}
			>
				{intl.formatMessage({ id: 'banner.heading' })}
			</Heading>
			<Heading
				as="h4"
				fontWeight="normal"
				mb={8}
				textAlign="center"
				fontSize={{ base: 'md', lg: 'xl' }}
				color="gray.200"
			>
				{intl.formatMessage({ id: 'banner.subheading' })}
			</Heading>
			{isRegisterPage ? null : (
				<Link to={intl.formatMessage({ id: 'banner.url' })}>
					<Button
						h="44px"
						borderRadius="2px"
						px="18px"
						variant="primary"
						mb={12}
					>
						{intl.formatMessage({ id: 'banner.button' })}
					</Button>
				</Link>
			)}
		</Flex>
	);
};

export default FooterRegister;
