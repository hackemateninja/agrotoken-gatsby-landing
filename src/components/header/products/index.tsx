//packages
import React, {FC} from "react";
import {
	Flex,
	Heading,
	List,
	ListIcon,
	ListItem,
	Menu,
	MenuButton,
	MenuList,
	Text,
	useDisclosure
} from "@chakra-ui/react";
import {useIntl} from "gatsby-plugin-react-intl";

//components
import IHeaderProductsPros from "@comp/header/products/types";

//svgs
import Card from "@svg/card.svg";
import Market from "@svg/market.svg";
import {Link} from "gatsby";


const HeaderProducts: FC<IHeaderProductsPros> = ({name, variant, onClick}) => {

	const intl = useIntl();

	const {isOpen, onOpen, onClose } = useDisclosure()

	return(
		<Menu isOpen={isOpen}>
			<MenuButton
				onMouseOver={onOpen}
				color={variant === 'Teaser' ? 'white' : 'gray.500'}
				_hover={{
					color: variant === 'Teaser' ? 'gray.200' : 'gray.700',
				}}>
				{intl.formatMessage({id: name})}
			</MenuButton>
			<MenuList p={0} onMouseLeave={onClose}>
				<List spacing='32px' color="gray.700" fontSize='14px' lineHeight='20px' padding='20px'>
					<ListItem alignItems="flex-start" display="flex">
						<ListIcon fontSize={25} as={Card} mr='19px' />
						<Link to={intl.formatMessage({id: 'links.prod1.url'})}>
							<Flex flexDir='column'  maxW='232px'>
								<Heading fontSize='16px' lineHeight='24px' mb='4px'>
									{intl.formatMessage({id: 'links.prod1.text'})}
								</Heading>
								<Text>
									{intl.formatMessage({id: 'links.prod1.desc'})}
								</Text>
							</Flex>
						</Link>
					</ListItem>
					<ListItem alignItems="flex-start" display="flex">
						<ListIcon fontSize={25} as={Market} mr='19px'/>
						<Link to={intl.formatMessage({id: 'links.prod2.url'})}>
							<Flex flexDir='column'  maxW='232px'>
								<Heading fontSize='16px' lineHeight='24px' mb='4px'>
									{intl.formatMessage({id: 'links.prod2.text'})}
								</Heading>
								<Text>
									{intl.formatMessage({id: 'links.prod2.desc'})}
								</Text>
							</Flex>
						</Link>
					</ListItem>
				</List>
			</MenuList>
		</Menu>
	);
};
export default HeaderProducts;
