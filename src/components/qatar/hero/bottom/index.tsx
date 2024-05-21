// packages
import React, {FC} from 'react';
import {Box, Flex, Heading, Link, Text} from "@chakra-ui/react";
import {useIntl} from "gatsby-plugin-react-intl";

// components
import SectionTitle from "@comp/visa/section-title";
import {IIconFeatureItem} from "@comp/icon-feature/types";

//data
import {QatarDataTop} from "@data/qatar";



const QatarHeroBottom: FC = () => {

	const intl = useIntl();

	return(
		<>
			<SectionTitle
				variant='dark'
				sectionName={intl.formatMessage({ id: 'qatar.fSpan' })}
				title={intl.formatMessage({ id: 'qatar.fTitle' })}
				desc={intl.formatMessage({ id: 'qatar.fDesc' })}
			/>
			<Flex
				maxW='100%'
				mt={{base: '72px', lg: '88px'}}
				mb={{base: '96px', lg: '112px'}}
				alignItems='center'
				alignSelf='stretch'
				flexGrow='0'
				gap={{base: '72px', lg: '32px'}}
				flexDir={{base: 'column', lg: 'row'}}>
				{QatarDataTop.map((item: IIconFeatureItem) => (
					<Box
						px='32px'
						pb='24px'
						maxW={{base: '343px', lg: '405px'}}
						borderRadius='16px'
						textAlign='center'
						backgroundColor='#203D18'>
						<Flex mx='auto' mt='-35px' justifyContent='center' mb='24px'>
							{item.icon}
						</Flex>
						<Heading
							fontWeight='500'
							color='white'
							lineHeight={{base: '28px', lg: '30px'}}
							fontSize={{base: '18px', lg: '20px'}}>
							{intl.formatMessage({ id: item.title })}
						</Heading>
						<Text
							mt='8px'
							fontSize='16px'
							color='white'
							lineHeight='24px'>
							{intl.formatMessage({ id: item.desc })}
						</Text>
					</Box>
				))}
			</Flex>
			<SectionTitle
				variant='dark'
				sectionName={intl.formatMessage({ id: 'qatar.fWhen' })}
				title={intl.formatMessage({ id: 'qatar.fWhenTitle' })}
			/>
			<Link
				color='white'
				href='/sorteo-qatar.pdf'
				target='_blank'
				lineHeight='24px'
				textDecor='underline'
				fontSize='16px'
				_hover={{color: 'gray.300'}}>
				{intl.formatMessage({ id: 'qatar.fLink' })}
			</Link>
		</>
	);
};

export default QatarHeroBottom;
