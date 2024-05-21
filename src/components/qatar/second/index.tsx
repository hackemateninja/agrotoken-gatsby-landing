//packages
import React, {FC} from "react";
import {Box, Flex, Heading, Image, Text, useBreakpointValue} from "@chakra-ui/react";
import {useIntl} from "gatsby-plugin-react-intl";

const QatarSecondSection: FC = () => {

	const intl = useIntl();

	const device = useBreakpointValue({base: 'sm', lg: ''});

	return(
		<Flex
			maxW='7xl'
			mx='auto'
			px={{base: 4, lg: 0}}
			mt={{base: '64px', lg: '48px'}}
			alignItems='center'
			justifyContent={{base: 'center', lg: 'flex-start'}}
			flexDir={{base: 'column-reverse', lg: 'row'}}>
			<Box
				flexDir='column'
				maxW='508px'
				alignItems={{base: 'center', lg: 'flex-start'}}>
				<Text
					textAlign={{base: 'center', lg: 'left'}}
					color='primary.700' mb='12px'>
					{intl.formatMessage({id: 'qatar.2secName'})}
				</Text>
				<Heading
					fontSize='30px'
					lineHeight='38px'
					textAlign={{base: 'center', lg: 'left'}}
					fontWeight={500}
					mb='16px'>
					{intl.formatMessage({id: 'qatar.2secTitle'})}
				</Heading>
				<Text
					textAlign={{base: 'center', lg: 'left'}}
					color='gray.700'
					fontSize='18px'
					lineHeight='28px'>
					{intl.formatMessage({id: 'qatar.2secDesc'})}
				</Text>
			</Box>
			{device === 'sm' ?
				<Image
					src='/images/cup-mobile.png'
					alt='agrotoken arg'
					w='201px'
					my={{base: '26px', lg: 0}}
				/> :
				<Image
					src='/images/trophy.png'
					alt='agrotoken arg'
					h='321px'
					my={{base: '26px', lg: 0}}
				/>}
			<Box
				flexDir='column'
				maxW='508px'
				alignItems={{base: 'center', lg: 'flex-start'}}>
				<Text
					textAlign={{base: 'center', lg: 'left'}}
					color='primary.700' mb='12px'>
					{intl.formatMessage({id: 'qatar.2sec2Name'})}
				</Text>
				<Heading
					fontSize='30px'
					lineHeight='38px'
					textAlign={{base: 'center', lg: 'left'}}
					fontWeight={500}
					mb='16px'>
					{intl.formatMessage({id: 'qatar.2sec2Title'})}
				</Heading>
				<Text
					textAlign={{base: 'center', lg: 'left'}}
					color='gray.700'
					fontSize='18px'
					lineHeight='28px'>
					{intl.formatMessage({id: 'qatar.2sec2Desc'})}
				</Text>
			</Box>
		</Flex>
	);
};

export default QatarSecondSection;
