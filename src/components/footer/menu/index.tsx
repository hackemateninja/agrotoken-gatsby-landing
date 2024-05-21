// packages
import { Container, Flex, Text } from '@chakra-ui/react';
import { useIntl } from 'gatsby-plugin-react-intl';
import React, { FC } from 'react';

//components
import FooterItem from '@comp/footer/item';
import { IItems } from '@comp/footer/types';

//data
import FooterMenuData from '@data/menu-footer';

//url
import LogoAgro from '@svg/brand.svg';

//footer menu
const FooterMenu: FC = () => {
	const intl = useIntl();

	return (
		<Flex
			px={{ base: 0, lg: 8 }}
			mb={14}
			justifyContent="space-between"
			flexDir={{ base: 'column', lg: 'row' }}
		>
			<Container
				w={{ base: '100%', lg: '30%' }}
				p={0}
				ml={0}
				mr={{ base: 0, lg: 16 }}
			>
				<LogoAgro />
				<Text mt={9}>{intl.formatMessage({ id: 'footer.heading' })}</Text>
			</Container>
			<Flex
				w={{ base: '100%', lg: '70%' }}
				flexDir={{ base: 'column', lg: 'row' }}
				justifyContent="space-between"
			>
				{FooterMenuData.map((item: IItems) => (
					<FooterItem
						key={item.title}
						title={item.title}
						links={item.links ? item.links : []}
					/>
				))}
			</Flex>
		</Flex>
	);
};

export default FooterMenu;
