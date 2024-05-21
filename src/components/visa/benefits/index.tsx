import React, { FC } from 'react';
import {
	Box,
	Flex,
	Grid,
	GridItem,
	Heading,
	Text,
	useBreakpointValue,
} from '@chakra-ui/react';
import { visaData } from '@data/visa';
import { IIconFeatureItem } from '@comp/icon-feature/types';
import SectionTitle from '@comp/visa/section-title';
import { useIntl } from 'gatsby-plugin-react-intl';

const Benefits: FC = () => {
	const intl = useIntl();

	const device = useBreakpointValue({ base: 'sm', md: 'md' });

	return (
		<Flex flexDir="column" alignItems="center" pt="48px">
			<Flex flexDir="column" maxW="7xl" mx="auto" px={{base: '16px', lg: 0}} mb={{base: "32px", lg: "64px"}}>
				<SectionTitle
					sectionName={intl.formatMessage({ id: 'visa.why' })}
					title={intl.formatMessage({ id: 'visa.whyTitle' })}
					desc={intl.formatMessage({ id: 'visa.whyDesc' })}
				/>
			</Flex>
			{device === 'sm' ? (
				<Flex
					flexDir={{ base: 'column', lg: 'row' }}
					mb="64px"
					maxW="7xl"
					mx="auto"
					px={{base: '16px', lg: 0}}
					alignItems="center"
					flexGrow={0}
					alignSelf="stretch"
					justifyContent="space-evenly"
					gap="24px"
				>
					{visaData.map((item: IIconFeatureItem) => (
						<Box
							key={item.id}
							padding="24px"
							w="100%"
							borderRadius="2px"
							alignSelf="stretch"
							flexGrow={1}
							backgroundColor="gray.50"
						>
							<Box
								p='14px'
								backgroundColor='gray.100'
								borderRadius='10px'
								alignItems='center'
								justifyContent='center'
								display='flex'
								h='48px'
								w='48px'
								sx={{
									'& svg' : {
										w: '20px'
									}
								}}>
								{item.icon}
							</Box>
							<Heading
								fontSize={{base: "18px", lg:"20px"}}
								lineHeight={{base: "28px", lg: "30px"}}
								mt="48px"
								fontWeight="500"
							>
								{intl.formatMessage({ id: item.title })}
							</Heading>
							<Text fontSize="16px" lineHeight="24px" color="gray.700">
								{intl.formatMessage({ id: item.desc })}
							</Text>
						</Box>
					))}
				</Flex>
			) : (
				<Grid
					templateRows="repeat(2, 1fr)"
					columnGap="64px"
					rowGap="32px"
					templateColumns="repeat(2, 1fr)"
				>
					{visaData.map((item: IIconFeatureItem) => (
						<GridItem key={item.id} rowSpan={1} colSpan={1}>
							<Flex
								flexDir="column"
								padding="24px"
								w="286px"
								alignItems="center"
								borderRadius="2px"
								alignSelf="stretch"
								flexGrow={1}
							>
								{item.icon}
								<Heading
									textAlign="center"
									mt="48px"
									fontSize={{base: "18px", lg:"20px"}}
									lineHeight={{base: "28px", lg: "30px"}}
									fontWeight="500"
								>
									{intl.formatMessage({ id: item.title })}
								</Heading>
								<Text
									textAlign="center"
									fontSize="16px"
									lineHeight="24px"
									color="gray.700"
								>
									{intl.formatMessage({ id: item.desc })}
								</Text>
							</Flex>
						</GridItem>
					))}
				</Grid>
			)}
		</Flex>
	);
};

export default Benefits;
