// packages
import {
	Box,
	Button,
	Center,
	Flex,
	Heading,
	Image,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalOverlay,
	Text,
	Tooltip,
	useBreakpointValue,
	useDisclosure,
} from '@chakra-ui/react';
import { Link } from 'gatsby';
import { useIntl } from 'gatsby-plugin-react-intl';
import React, { FC } from 'react';

// components
import RateValues from '@comp/home/rate-values';

//svg
import Play from '@svg/play.svg';

//types
import { IHeroProps } from './types';

// hero in the index component
const Hero: FC<IHeroProps> = () => {
	const intl = useIntl();

	const image = useBreakpointValue({
		base: '/images/hero-mobile.png',
		lg: '/images/Agrotoken.png',
	});
	const device = useBreakpointValue({ base: 'sm', lg: 'lg' });

	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<>
			<Modal isOpen={isOpen} onClose={onClose} size="2xl" isCentered>
				<ModalOverlay />
				<ModalContent bgColor="transparent" boxShadow="none" p={0}>
					<ModalCloseButton color="white" />
					<ModalBody>
						<iframe
							width="560"
							height="315"
							src="https://www.youtube.com/embed/YcyhMAr5L8w"
							title="YouTube video player"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						/>
					</ModalBody>
				</ModalContent>
			</Modal>
			<Flex
				id="main"
				backgroundImage={{ base: undefined, lg: '/images/Agrotoken.png' }}
				bgPosition="right bottom"
				bgSize="700px"
				bgRepeat="no-repeat"
				flexDir="column"
				alignItems={{ base: 'center', lg: 'flex-start' }}
				maxW="7xl"
				mx="auto"
			>
				<Box
					w={{ base: '100%', lg: '60%' }}
					pt={{ base: '30px', lg: '124px' }}
					pb={{ base: 4, lg: '87px' }}
					px={{ base: 4, md: 10 }}
				>
					<Heading
						as="h3"
						fontWeight="medium"
						fontSize={{ base: '3xl', lg: '6xl' }}
						cursor="pointer"
						mb={2}
					>
						{intl.formatMessage({ id: 'title1' })}
						<Tooltip
							label={intl.formatMessage({ id: 'tokenDefinition' })}
							aria-label="A tooltip"
						>
							<Text as="span" textDecoration="underline gray dashed 2px">
								{intl.formatMessage({ id: 'token' })}
							</Text>
						</Tooltip>
						{intl.formatMessage({ id: 'title2' })}
					</Heading>
					<Text
						fontSize={{ base: 'lg', lg: 'xl' }}
						color="gray.700"
						mb={8}
						mr={8}
					>
						{intl.formatMessage({ id: 'description' })}
					</Text>
					<Flex flexDir={{ base: 'column', lg: 'row' }} mb={8}>
						<Link to="/get-in-touch">
							<Button
								w={{ base: 'full', lg: 'auto' }}
								h="60px"
								variant="primary"
								size="lg"
								px="28px"
								mr={{ base: 0, lg: 3 }}
								mb={{ base: 4, lg: 0 }}
							>
								{intl.formatMessage({ id: 'bepart.contactUs' })}
							</Button>
						</Link>
						<Button onClick={onOpen} px="28px" h="60px" color="gray.700">
							<Play />
							<Text ml={3}>{intl.formatMessage({ id: 'whatAgrotoken' })}</Text>
						</Button>
					</Flex>
					<RateValues isShadow={false} textAlign="left" isStartJustify />
				</Box>
				{device === 'sm' ? (
					<Image
						w={{ base: '100%', lg: '40%' }}
						src={image}
						objectFit="cover"
						alt="agrotoken"
					/>
				) : null}
			</Flex>
		</>
	);
};
export default Hero;
