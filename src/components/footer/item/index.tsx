// packages
import {
	Container,
	Heading,
	ListItem,
	List,
	Text,
	Link as ChakraLink,
} from '@chakra-ui/react';
import { Link } from 'gatsby';
import { useIntl } from 'gatsby-plugin-react-intl';
import React, { FC } from 'react';

//types
import { IItemFooterProps, ILink } from './types';

// footer menu item
const FooterItem: FC<IItemFooterProps> = ({ title, links, isExternal }) => {
	const intl = useIntl();
	return (
		<Container p={0} m={0} w="auto">
			<Heading
				as="h5"
				fontSize="sm"
				color="gray.400"
				fontWeight="semibold"
				mb={4}
			>
				{intl.formatMessage({ id: title })}
			</Heading>
			<List>
				{links.map((link: ILink) => (
					<ListItem mb={4} key={link.title}>
						{link.isExternal ? (
							<ChakraLink
								href={intl.formatMessage({ id: link.url })}
								isExternal
							>
								<Text color="gray.200" _hover={{ color: 'gray.400' }}>
									{intl.formatMessage({ id: link.title })}
								</Text>
							</ChakraLink>
						) : (
							<Link to={intl.formatMessage({ id: link.url })} rel="noreferrer">
								<Text color="gray.200" _hover={{ color: 'gray.400' }}>
									{intl.formatMessage({ id: link.title })}
								</Text>
							</Link>
						)}
					</ListItem>
				))}
			</List>
		</Container>
	);
};

export default FooterItem;
