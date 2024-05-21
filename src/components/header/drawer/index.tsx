// packages
import {
	Drawer,
	DrawerBody,
	DrawerContent,
	DrawerHeader,
	DrawerOverlay,
} from '@chakra-ui/react';
import { Link } from 'gatsby';
import Close from '@svg/close.svg';
import React, { FC } from 'react';

//components
import AuthButtons from '@comp/header/auth-buttons';
import HeaderIconButton from '@comp/header/icon-button';
import HeaderMenu from '@comp/header/menu';

//data
import { menuTopMobile } from '@data/menu-top';

// svg
import LogoAgro from '@svg/brand.svg';

//types
import { IHeaderDrawerProps } from './types';

const HeaderDrawer: FC<IHeaderDrawerProps> = ({ onClose, isOpen }) => {
	return (
		<Drawer placement="top" onClose={onClose} isOpen={isOpen} size="full">
			<DrawerOverlay />
			<DrawerContent>
				<DrawerHeader
					h={16}
					px={4}
					display="flex"
					flexDir="row"
					alignItems="center"
					justifyContent="space-between"
				>
					<Link to="/" onClick={onClose}>
						<LogoAgro />
					</Link>
					<HeaderIconButton onClick={onClose} icon={<Close />} />
				</DrawerHeader>
				<DrawerBody display="flex" flexDir="column" p={4}>
					<HeaderMenu items={menuTopMobile} onItemClose={onClose} />
					<AuthButtons isDrawer />
				</DrawerBody>
			</DrawerContent>
		</Drawer>
	);
};

export default HeaderDrawer;
