// packages
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import {useIntl} from "gatsby-plugin-react-intl";
import React, { FC } from 'react';

//types
import { ICardStepProps } from './types';

const CardStep: FC<ICardStepProps> = ({
	title,
	desc,
	imgTitle,
	img,
	element,
}) => {

	const intl = useIntl();

	return (
		<Flex pb="48px" flexDir="column" w="100%" maxW="375px">
			<Box h="365px" w="100%" backgroundImage={img}>
				<Text
					mt="63px"
					fontWeight="700"
					fontSize="18px"
					lineHeight="17px"
					textAlign="center">
					{intl.formatMessage({id: imgTitle})}
				</Text>
			</Box>
			<Flex flexDir="column" alignItems="center" px="32px">
				<Heading mt="32px" fontSize="24px" lineHeight="24px" textAlign="center">
					{intl.formatMessage({id: title})}
				</Heading>
				<Text
					mt="16px"
					mb="24px"
					color="#667085"
					fontSize="18px"
					lineHeight="120%"
					fontWeight="400"
					textAlign="center"
				>
					{intl.formatMessage({id: desc})}
				</Text>
				{element}
			</Flex>
		</Flex>
	);
};
export default CardStep;
