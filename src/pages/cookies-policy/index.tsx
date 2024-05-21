// packages
import { useIntl } from 'gatsby-plugin-react-intl';
import React, { FC, ReactNode } from 'react';

//layouts
import { Text, Box, VStack, Center, Link } from '@chakra-ui/react';

import AgrotokenLogo from '../../../src/components/svgs/logo_standard.svg';

const CookiesPolicy: FC = () => {
	const intl = useIntl();

	return (
		<Center>
			<Box w="50%">
				<Box mb="12" mt="16">
					<Link href="/"><AgrotokenLogo /></Link>
				</Box>
				<Box>
					<Text
						as="u"
						fontSize='3xl'
						fontWeight="medium"
						my="8"
						whiteSpace="pre"
					>
						{intl.formatMessage({ id: 'cookiesPolicy.title' })}
					</Text>
					<VStack align="flex-start" spacing={4}>
						<Text>{intl.formatMessage({ id: 'cookiesPolicy.intro' })}</Text>
						<Text>{intl.formatMessage({ id: 'cookiesPolicy.content' })}</Text>
					</VStack>
				</Box>
				<Box mb="12" mt="16">
					<Link href="/"><AgrotokenLogo /></Link>
				</Box>
			</Box>
		</Center>
	);
};
export default CookiesPolicy;
