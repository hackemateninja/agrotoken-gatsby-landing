// packages
import { Button, Flex, Text, Link, Box } from '@chakra-ui/react';
import { useIntl } from 'gatsby-plugin-react-intl';
import React, { FC } from 'react';
import { Link as GatsbyLink } from 'gatsby';

//components
import Lang from '@comp/header/lang';

//types
import { IAuthButtonsProps } from './types';

//auth buttons for login and register
const AuthButtons: FC<IAuthButtonsProps> = ({ isDrawer, variant }) => {
	const intl = useIntl();

	const signUp = intl.formatMessage({ id: 'signup' });
	const login = intl.formatMessage({ id: 'login' });

	const signUpUrl = intl.formatMessage({ id: 'signupUrl' });
	const loginUrl = intl.formatMessage({ id: 'loginUrl' });

	if (isDrawer) {
		return (
			<Flex maxW="full" flexDir="column">
				<Box my={8}>
					<Lang />
				</Box>
				<Link href={signUpUrl}>
					<Button variant="primary" w="full" h="44px" mb={4}>
						{signUp}
					</Button>
				</Link>
				<Link href={loginUrl} target="_blank">
					<Button w="full" h="44px">
						{login}
					</Button>
				</Link>
			</Flex>
		);
	}
	return (
		<Flex alignItems="center">
			<Lang variant={variant} />
			<Link href={signUpUrl}>
				<Text
					py={2.5}
					px={6}
					color={variant === 'Teaser' ? 'white' : 'gray.500'}
					_hover={{ color: variant === 'Teaser' ? 'gray.200' : 'gray.700' }}
				>
					{signUp}
				</Text>
			</Link>
			<Link href={loginUrl}>
				<Button
					h="44px"
					px="18px"
					color={variant === 'Teaser' ? 'white' : 'gray.500'}
					borderRadius="2px"
					_hover={{ color: variant === 'Teaser' ? 'gray.200' : 'gray.700' }}
				>
					{login}
				</Button>
			</Link>
		</Flex>
	);
};

export default AuthButtons;
