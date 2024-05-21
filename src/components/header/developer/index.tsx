// packages
import {
	chakra,
	Fade,
	Flex,
	forwardRef,
	Grid,
	GridItem,
	Heading,
	Menu,
	MenuButton,
	MenuItem,
	MenuListProps,
	Text, useDisclosure,
	useMenuContext,
	useMenuList,
	useMenuPositioner
} from '@chakra-ui/react';
import React, { FC } from 'react';
import { useIntl } from 'gatsby-plugin-react-intl';

//components
import { IDeveloperProps } from '@comp/header/developer/types';
import { IIconFeatureItem } from '@comp/icon-feature/types';

//data
import developer from '@data/developer';

//svgs
import ArrowUp from '@svg/arrow-up.svg';


export const CustomMenuList = forwardRef<MenuListProps, "div">((props, ref) => {
	const { rootProps, ...rest } = props
	const {
		isOpen,
		unstable__animationState: animated,
	} = useMenuContext()

	const ownProps = useMenuList(rest, ref) as any
	const positionerProps = useMenuPositioner(rootProps)

	return (
		<chakra.div
			{...positionerProps}
			px={4}
			pt={{ base: 4, lg: 8 }}
			pb={{ base: 4, lg: '7px' }}
			w={{ base: '100%', lg: '100vw' }}
			borderRadius={0}
			borderColor="gray.100"
			borderBottomWidth="2px"
			backgroundColor="white"
			__css={{ zIndex: props.zIndex }}
		>
			<Fade
				in={isOpen}
				{...ownProps}
				className="chakra-menu__menu-list"
			/>
		</chakra.div>
	)
})

const Developer: FC<IDeveloperProps> = ({ name, onClick, variant }) => {
	const intl = useIntl();

	const {isOpen, onOpen, onClose } = useDisclosure()


	return (
		<Menu isOpen={isOpen} autoSelect={false} >
			<MenuButton
				onMouseOver={onOpen}
				color={variant === 'Teaser' ? 'white' : 'gray.500'}
				_hover={{
					color: variant === 'Teaser' ? 'gray.200' : 'gray.700',
				}}
			>
				{intl.formatMessage({ id: name })}
			</MenuButton>
			<CustomMenuList onMouseLeave={onClose}>
				<Grid
					maxW={{ base: 'auto', lg: '7xl' }}
					mx="auto"
					templateColumns="repeat(3, 1fr)"
					gap={{ base: 4, lg: 8 }}
				>
					<GridItem colSpan={{ base: 3, lg: 1 }}>
						<Heading
							as="h1"
							fontWeight="500"
							fontSize="18px"
							lineHeight="28px"
							mb="2px"
							color="gray.900"
						>
							{intl.formatMessage({ id: 'developer.title' })}
						</Heading>
						<Text fontSize="14px" mb={8} lineHeight="20px" color="gray.700">
							{intl.formatMessage({ id: 'developer.desc' })}
						</Text>
						<Flex gap={3} flexDir="column">
							<Text
								onClick={onClick}
								_hover={{ cursor: 'pointer', textDecor: 'underline' }}
								fontSize="14px"
								fontWeight="500"
								lineHeight="20px"
								color="primary.700"
							>
								{intl.formatMessage({ id: 'developer.opt1' })}
							</Text>
							<Text
								onClick={onClick}
								_hover={{ cursor: 'pointer', textDecor: 'underline' }}
								fontSize="14px"
								fontWeight="500"
								lineHeight="20px"
								color="primary.700"
							>
								{intl.formatMessage({ id: 'developer.opt2' })}
							</Text>
							<Flex alignItems="center" gap={2}>
								<Text
									onClick={onClick}
									fontSize="14px"
									fontWeight="500"
									lineHeight="20px"
									color="primary.700"
									_hover={{ cursor: 'pointer', textDecor: 'underline' }}
								>
									{intl.formatMessage({ id: 'developer.opt3' })}
								</Text>
								<ArrowUp />
							</Flex>
						</Flex>
					</GridItem>
					<GridItem colSpan={{ base: 3, lg: 1 }}>
						{developer.slice(0, 4).map((item: IIconFeatureItem) => (
							<MenuItem
								key={item.id}
								px={0}
								pt={0}
								pb={{ base: '12px', lg: '25px' }}
								icon={item.icon}
								onClick={onClick}
								alignItems="flex-start"
								sx={{
									_hover: {
										'backgroundColor': 'transparent',
										'.css-1sdqz24': { textDecoration: 'underline' },
									},
								}}
							>
								<Flex alignItems="flex-start" gap="5px">
									<Text
										as="span"
										fontWeight="500"
										fontSize="14px"
										lineHeight="20px"
										color="gray.900"
										_hover={{ textDecoration: 'underline' }}
									>
										{intl.formatMessage({ id: item.title })}
									</Text>
									{item.badge}
								</Flex>
								<Text
									fontWeight="400"
									fontSize="12px"
									lineHeight="18px"
									mt="4px"
									color="gray.700"
								>
									{intl.formatMessage({ id: item.desc })}
								</Text>
							</MenuItem>
						))}
					</GridItem>
					<GridItem colSpan={{ base: 3, lg: 1 }}>
						{developer.slice(4, 7).map((item: IIconFeatureItem) => (
							<MenuItem
								key={item.id}
								px={0}
								pt={0}
								pb={{ base: '12px', lg: '25px' }}
								icon={item.icon}
								onClick={onClick}
								alignItems="flex-start"
								sx={{
									_hover: {
										'backgroundColor': 'transparent',
										'.css-1sdqz24': { textDecoration: 'underline' },
									},
								}}
							>
								<Flex alignItems="flex-start" gap="5px">
									<Text
										as="span"
										fontWeight="500"
										fontSize="14px"
										lineHeight="20px"
										color="gray.900"
										_hover={{ textDecoration: 'underline' }}
									>
										{intl.formatMessage({ id: item.title })}
									</Text>
									{item.badge}
								</Flex>
								<Text
									as="p"
									fontWeight="400"
									fontSize="12px"
									lineHeight="18px"
									mt="4px"
									color="gray.700"
								>
									{intl.formatMessage({ id: item.desc })}
								</Text>
							</MenuItem>
						))}
					</GridItem>
				</Grid>
			</CustomMenuList>
		</Menu>
	);
};

export default Developer;
