// packages
import {
	Box,
	Flex,
	Heading,
	Image,
	Text,
	useBreakpointValue,
} from '@chakra-ui/react';
import { useIntl } from 'gatsby-plugin-react-intl';
import React, { FC } from 'react';

//components
import SubscriptionForm from '@comp/subscription-form';
import IconFeatureSection from '@comp/icon-feature-section';

//data
import teaser from '@data/teaser';

// layouts
import Teaser from '@layouts/teaser';

//svg
import Visa from '@svg/visa.svg';
import Android from '@svg/android.svg';
import Ios from '@svg/apple.svg';

const VisaTeaserPage: FC = () => {
	const intl = useIntl();
	const device = useBreakpointValue({ base: 'sm', lg: 'lg' });

	return (
		<Teaser>
			<Box h="1001px" bgColor="#011B01" />
			<Flex
				position="absolute"
				top={{ base: -16, lg: -20 }}
				background="url(/images/field.png) no-repeat center"
				opacity="1"
				backgroundSize="cover"
				h="1001px"
				w="full"
			/>
			<Box
				position="absolute"
				top={{ base: -16, lg: -20 }}
				background="linear-gradient(360deg, rgba(1, 27, 1, 1) 7.35%, rgba(1, 27, 1, 0.3) 100%)"
				h="1001px"
				w="full"
			>
				<Flex
					alignItems="center"
					flexDir="column"
					mt={{ base: '162px', lg: '242px' }}
				>
					<Flex
						alignItems="center"
						maxW="7xl"
						px={4}
						flexDir="column"
						sx={{
							'#lines': {
								position: 'absolute',
								width: '100vw',
								top: 500,
							},
						}}
					>
						{device === 'lg' ? <Visa /> : null}
						<Heading
							maxW="721px"
							fontWeight="500"
							mt={{ base: 0, lg: '38px' }}
							fontSize={{ base: '36px', lg: '48px' }}
							textAlign={{ base: 'left', lg: 'center' }}
							lineHeight="60px"
							color="white"
						>
							{intl.formatMessage({ id: 'teaser.title' })}
						</Heading>
						<Text
							fontSize={{ base: '18px', lg: '20px' }}
							textAlign={{ base: 'left', lg: 'center' }}
							fontWeight="400"
							lineHeight="30px"
							mt="8px"
							mb="32px"
							color="white"
						>
							{intl.formatMessage({ id: 'teaser.subTitle' })}
						</Text>
						<SubscriptionForm
							variant="Teaser"
							errorMessage={intl.formatMessage({ id: 'contact.error.email' })}
							placeholder={intl.formatMessage({ id: 'teaser.placeholder' })}
							buttonText={intl.formatMessage({ id: 'teaser.button' })}
						/>
						<Image
							w={{ base: '300px', lg: '340px' }}
							maxW="100%"
							mt={{ base: '100px', lg: '150px' }}
							src="/images/visa-card.png"
							alt="visa-card"
						/>
					</Flex>
				</Flex>
			</Box>
			<Flex
				pt={{ base: '150px', lg: '297px' }}
				flexDir="column"
				bgColor="#011B01"
			>
				<Flex px={4} flexDir="column" maxW="7xl" mx="auto">
					<Heading
						textAlign="center"
						color="white"
						fontSize="24px"
						lineHeight="32px"
						fontWeight="500"
						mb={4}
					>
						{intl.formatMessage({ id: 'teaser.soon' })}
					</Heading>
					<Text
						textAlign="center"
						mx="auto"
						color="white"
						fontSize="16px"
						mb="115px"
						lineHeight="24px"
						fontWeight="400"
						maxW="432px"
					>
						{intl.formatMessage({ id: 'teaser.soonDesc' })}
					</Text>
					<IconFeatureSection columns={3} variant="Teaser" items={teaser} />
				</Flex>
				<Flex flexDir="column" maxW="7xl" px={4} mx="auto">
					<Flex
						borderRadius="10px"
						mt={{ base: '75px', lg: '122px' }}
						flexDir={{ base: 'column-reverse', lg: 'row' }}
						alignItems="center"
						background="url(/images/box-teaser.png) no-repeat center"
						backgroundSize="cover"
					>
						<Flex
							alignItems={{ base: 'center', lg: 'flex-start' }}
							w={{ base: '100%', lg: '45%' }}
						>
							<Image mx="auto" src="/images/teaser-mobile.png" />
						</Flex>
						<Flex
							zIndex={2}
							pt={{ base: '53px', lg: 0 }}
							px={{ base: 4, lg: 0 }}
							mb={{ base: '34px', lg: 0 }}
							pr={{ base: 4, lg: '64px' }}
							flexDir="column"
							alignItems={{ base: 'center', lg: 'flex-start' }}
							w={{ base: '100%', lg: '50%' }}
						>
							<Heading
								fontWeight="500"
								mb="4px"
								fontSize="30px"
								lineHeight="38px"
								textAlign={{ base: 'center', lg: 'left' }}
								color="white"
							>
								{intl.formatMessage({ id: 'teaser.waitTitle' })}
							</Heading>
							<Text
								textAlign={{ base: 'center', lg: 'left' }}
								fontSize="16px"
								fontWeight="400"
								lineHeight="24px"
								mb="18px"
								color="white"
							>
								{intl.formatMessage({ id: 'teaser.subTitle' })}
							</Text>
							<SubscriptionForm
								variant="Teaser"
								errorMessage={intl.formatMessage({ id: 'contact.error.email' })}
								placeholder={intl.formatMessage({ id: 'teaser.placeholder' })}
								buttonText={intl.formatMessage({ id: 'teaser.button' })}
							/>
						</Flex>
					</Flex>
					<Flex
						px={4}
						flexDir={{ base: 'column', lg: 'row' }}
						mt={4}
						mb={{ base: '90px', lg: '100px' }}
					>
						<Flex>
							<Ios />
							<Text
								fontSize="14px"
								lineHeight="20px"
								ml="8px"
								mr="24px"
								color="white"
							>
								{intl.formatMessage({ id: 'teaser.apple' })}
							</Text>
						</Flex>
						<Flex>
							<Android />
							<Text fontSize="14px" lineHeight="20px" ml="8px" color="white">
								{intl.formatMessage({ id: 'teaser.android' })}
							</Text>
						</Flex>
					</Flex>
				</Flex>
			</Flex>
		</Teaser>
	);
};
export default VisaTeaserPage;
