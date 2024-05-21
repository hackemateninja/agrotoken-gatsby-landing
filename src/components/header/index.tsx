//packages
import { Flex, useBreakpointValue, useDisclosure } from '@chakra-ui/react';
import Menu from '@svg/hamburguer.svg';
import { Link } from 'gatsby';
import React, { FC } from 'react';

//components
import AuthButtons from '@comp/header/auth-buttons';
import HeaderDrawer from '@comp/header/drawer';
import HeaderIconButton from '@comp/header/icon-button';
import HeaderMenu from '@comp/header/menu';

// data
//data
import { menuTop } from '@data/menu-top';

// svg
import LogoAgro from '@svg/brand.svg';
import LogoTeaser from '@svg/agroLogoTeaser.svg';
import { IHeaderProps } from '@comp/header/types';
import {useIntl} from "gatsby-plugin-react-intl";

// header component
const Header: FC<IHeaderProps> = ({ variant }) => {
	const { onOpen, isOpen, onClose } = useDisclosure();

	const intl = useIntl();

	const breakPoint = useBreakpointValue({ base: 'mobile', xl: 'desktop' });

	const condition = breakPoint === 'desktop';

	return (
		<>
			<Flex
				as="header"
				w="full"
				top={0}
				boxShadow={variant === 'Teaser' ? 'none' : 'xs'}
				bgColor={variant === 'Teaser' ? 'transparent' : 'white'}
				zIndex={2}
				position={condition ? 'relative' : 'fixed'}
			>
				<Flex
					mx="auto"
					w="1440px"
					maxW="100%"
					h={{ base: 16, lg: 20 }}
					px={{ base: 4, md: 10, xl: '' }}
					alignItems="center"
					justifyContent="space-between"
				>
					<Link to={`/${intl.locale}`}>
						{variant === 'Teaser' ? (
							<LogoTeaser width="170px" />
						) : (
							<LogoAgro width="170px" />
						)}
					</Link>
					{condition ? <HeaderMenu variant={variant} items={menuTop} /> : null}
					{condition ? (
						<AuthButtons variant={variant} isDrawer={false} />
					) : (
						<HeaderIconButton
							variant={variant}
							onClick={onOpen}
							icon={<Menu />}
						/>
					)}
				</Flex>
			</Flex>
			<HeaderDrawer onClose={onClose} isOpen={condition ? false : isOpen} />
		</>
	);
};
export default Header;
