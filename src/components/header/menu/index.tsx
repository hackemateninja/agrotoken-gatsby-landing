//packages
import {
	Flex,
	Link as ChakraLink,
	Text,
	useDisclosure,
} from '@chakra-ui/react';
import React, { FC } from 'react';
import { useIntl } from 'gatsby-plugin-react-intl';
import { Link } from 'gatsby';

//components
import HeaderLinkText from '@comp/header/LinkText';
import Developer from '@comp/header/developer';
import DeveloperModal from '@comp/header/modal';

// types
import { IHeaderMenuProps } from './types';
import { ILinkItem } from '@def/ILinkItem';
import HeaderProducts from "@comp/header/products";

//header menu component
const HeaderMenu: FC<IHeaderMenuProps> = ({ onItemClose, items, variant }) => {
	const intl = useIntl();

	const { isOpen, onOpen, onClose } = useDisclosure();

	const HeaderLink = (item: ILinkItem) => {
		if (item.isExternal) {
			return (
				<ChakraLink
					href={intl.formatMessage({ id: item.url })}
					onClick={onItemClose ?? undefined}
					isExternal={true}
				>
					<HeaderLinkText variant={variant} text={item.text} />
				</ChakraLink>
			);
		}

		if (item.id === '8') {
			return (
				<Text as="span" onClick={onOpen}>
					<HeaderLinkText variant={variant} text={item.text} />
				</Text>
			);
		}


		if (item.id === '2') {
			return <HeaderProducts onClick={onOpen} name={item.text} />;
		}


		if (item.id === '6') {
			return <Developer variant={variant} onClick={onOpen} name={item.text} />;
		}

		return (
			<Link
				onClick={onItemClose ?? undefined}
				to={intl.formatMessage({ id: item.url })}
			>
				<HeaderLinkText variant={variant} text={item.text} />
			</Link>
		);
	};

	return (
		<Flex flexDir={{ base: 'column', lg: 'row' }} gap='24px' alignItems='flex-start' flexGrow={0}>
			<DeveloperModal isOpen={isOpen} onClose={onClose} />
			{items.map((item: ILinkItem) => (
				<HeaderLink
					key={item.id}
					isExternal={item.isExternal}
					isAction={item.isAction}
					id={item.id}
					url={item.url}
					text={item.text}
				/>
			))}
		</Flex>
	);
};

export default HeaderMenu;
