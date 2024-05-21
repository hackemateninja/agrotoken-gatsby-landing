// packages
import React, {FC} from "react";
import {
	Accordion,
	AccordionButton,
	AccordionItem,
	AccordionPanel,
	Box,
	Flex,
	ListItem,
	Text,
	UnorderedList
} from "@chakra-ui/react";
import {FormattedMessage, useIntl} from "gatsby-plugin-react-intl";

// components
import SectionTitle from "@comp/visa/section-title";


//data
import {visaAsk} from "@data/visa";

//svgs
import Opened from '@svg/opened.svg';
import Closed from '@svg/closed.svg';

//types
import {IAsk} from "@comp/visa/ask/types";

const Ask: FC = () => {
	const intl = useIntl();
	return(
		<Flex
			maxW="7xl"
			mx="auto"
			px={{base: "16px", lg: 0}}
			flexDir="column"
			my='64px'
			alignItems='center'>
			<SectionTitle
				title={intl.formatMessage({ id: 'visa.askTitle' })}
				desc={intl.formatMessage({ id: 'visa.askDesc' })}
			/>
			<Accordion mt='64px' w='100%' maxW='768px'>
				{visaAsk.map((item:IAsk) => (
					<AccordionItem key={item.id}>
						{({ isExpanded }) => (
							<>
								<h2>
									<AccordionButton>
										<Box flex='1' textAlign='left'>
											<Text
												fontWeight='500'
												lineHeight='28px'
												fontSize='18px'
											>
												{intl.formatMessage({id: item.title})}
											</Text>
										</Box>
										{isExpanded ? (
											<Opened />
										) : (
											<Closed />
										)}
									</AccordionButton>
								</h2>
								<AccordionPanel pb={4}>
									<Text
										fontWeight='400'
										lineHeight='24px'
										fontSize='16px'
									>
										<FormattedMessage id={item.desc} values={{br: <br/>}} />
									</Text>
									<br/>
									{item.items?.length > 0 ?
										<UnorderedList>
											{item.items.map((i) => (
												<ListItem key={i.id}>{intl.formatMessage({id: i.text})}</ListItem>
											))}
										</UnorderedList>
										: null}
								</AccordionPanel>
							</>
						)}
					</AccordionItem>
				))}
			</Accordion>
		</Flex>
	)
};
export default Ask;
