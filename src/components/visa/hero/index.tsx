import React, { FC } from 'react';
import {Button, Flex, Heading, Image, Link, Text, useDisclosure} from '@chakra-ui/react';
import { useIntl } from 'gatsby-plugin-react-intl';
import TeaserModal from "@comp/teaser/modal-teaser";
import URLS from "@config/urls";

const HeroVisa: FC = () => {
	const intl = useIntl();

	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<>
			<TeaserModal url={URLS.visa} isOpen={isOpen} onClose={onClose} comesFrom='button'/>
			<Flex maxW="7xl" mx="auto" px={{base: "16px", lg: 0}} flexDir="column" mt={{base: "120px", lg: "64px"}} mb="32px">
				<Heading
					textAlign="center"
					mb="12px"
					fontWeight="500"
					fontSize={{base: "36px", lg:"60px"}}
					lineHeight={{base: "44px", lg:"72px"}}
					letterSpacing="-2%"
				>
					{intl.formatMessage({ id: 'visa.title' })}
					<Text as="span">
						#{intl.formatMessage({ id: 'visa.titleF' })}
						<Text as="span" color="primary.500">
							{intl.formatMessage({ id: 'visa.titleSpan' })}
						</Text>
					</Text>
					<Text as="span">{intl.formatMessage({ id: 'visa.titleS' })}</Text>
				</Heading>
				<Text
					textAlign="center"
					fontSize={{base: "18px", lg: "20px"}}
					lineHeight={{base: "28px", lg: "30px"}}
					color="gray.500"
					fontWeight="400"
				>
					{intl.formatMessage({ id: 'visa.subTitle' })}
				</Text>
			</Flex>
			<Flex
				px={{base: "16px", lg: 0}}
				flexDir={{base: 'column', lg: 'row'}}
				maxW="7xl"
				mx="auto"
				justifyContent="center"
				mb={{base:"32px", lg: "64px"}}>
				<Button
					boxShadow='0px 1px 2px rgba(16, 24, 40, 0.05);'
					mb={{base: "16px", lg: 0}}
					variant="primary"
					height="48px"
					py="12px"
					px="20px"
					onClick={onOpen}>
					{intl.formatMessage({ id: 'visa.buttonGreen' })}
				</Button>
				<Link href='#sub-box'>
					<Button  w={{base: '100%', lg: 'auto'}} ml={{base: 0, lg: "16px"}} height="48px" py="12px" px="20px">
						{intl.formatMessage({ id: 'visa.buttonWhite' })}
					</Button>
				</Link>
			</Flex>
			<Image
				src="/images/agricooltor.gif"
				w='100%'
				maxW="1282px"
				mx="auto"
				alt="visa-cooltor"
			/>
		</>
	);
};
export default HeroVisa;
