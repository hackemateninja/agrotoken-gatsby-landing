import React, {FC} from "react";
import {Button, Heading, Image, Text, useDisclosure} from "@chakra-ui/react";
import QatarLogo from "@svg/qatar.svg";
import { useIntl} from "gatsby-plugin-react-intl";
import QatarModal from "@comp/qatar/modal";


const QatarHeroTop: FC = () => {

	const intl = useIntl();

	const { isOpen, onOpen, onClose } = useDisclosure();

	return(
		<>
			<QatarModal isOpen={isOpen} onClose={onClose}/>
			<QatarLogo/>
			<Heading
				textAlign="center"
				mb={{base: '16px', lg: '12px'}}
				mt={{base: '32px', lg: '62px'}}
				fontWeight="500"
				color='white'
				maxW='917px'
				fontSize={{base: "36px", lg:"60px"}}
				lineHeight={{base: "44px", lg:"72px"}}
				letterSpacing="-0.02em">
				{intl.formatMessage({ id: 'qatar.titleF' })}
				<Text as="span">
					#{intl.formatMessage({ id: 'visa.titleF' })}
					<Text as="span" color="primary.600">
						{intl.formatMessage({ id: 'visa.titleSpan' })}
					</Text>
				</Text>
				<Text as="span">{intl.formatMessage({ id: 'qatar.titleS' }, {br: <br/>})}</Text>
			</Heading>
			<Text
				textAlign="center"
				fontSize={{base: "18px", lg: "20px"}}
				lineHeight={{base: "28px", lg: "30px"}}
				color="white"
				mb={{base: '32px', lg: '24px'}}
				maxW='679px'
				fontWeight="500">
				{intl.formatMessage({ id: 'qatar.banner' }, {br: <span/>})}
			</Text>
			<Button
				onClick={onOpen}
				boxShadow='0px 1px 2px rgba(16, 24, 40, 0.05);'
				mb='64px'
				variant="primary"
				height="48px"
				py="12px"
				px="20px">
				{intl.formatMessage({ id: 'qatar.button' })}
			</Button>
			<Image src='/images/agro-arg.png' alt='agrotoken arg' mb={{base: '64px', lg:'95px'}}/>
		</>
	);
};
export default QatarHeroTop;
