// packages
import { Flex, Link, Text } from '@chakra-ui/react';
import { useIntl } from 'gatsby-plugin-react-intl';
import React, { FC } from 'react';

//svg
import Instagram from '@svg/ig.svg';
import Linkedin from '@svg/ln.svg';
import Twitter from '@svg/tw.svg';

// social links on footer
const FooterSocial: FC = () => {
	const intl = useIntl();
	return (
		<Flex justifyContent='space-between' pb={{ base: 8, lg: 0 }}>
			<Text color='gray.400'>
				{intl.formatMessage({ id: 'footer.copyright' })}
			</Text>
			<Flex alignItems="center" gap={6}>
				<Link
					href="https://twitter.com/agrotoken"
					target="_blank"
					rel="noreferrer"
				>
					<Twitter />
				</Link>
				<Link
					href="https://www.instagram.com/agrotoken/"
					target="_blank"
					rel="noreferrer"
				>
					<Instagram />
				</Link>
				<Link
					href="https://www.linkedin.com/company/agrotoken"
					target="_blank"
					rel="noreferrer"
				>
					<Linkedin />
				</Link>
			</Flex>
		</Flex>
	);
};
export default FooterSocial;
