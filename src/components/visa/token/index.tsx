import React, { FC } from 'react';
import { Flex, Text } from '@chakra-ui/react';
import Soya from '@svg/soya.svg';
import Cora from '@svg/cora.svg';
import Whea from '@svg/whea.svg';
import { useIntl } from 'gatsby-plugin-react-intl';

const Token: FC = () => {
	const intl = useIntl();
	return (
		<Flex flexDir="column" alignItems="center" pb={{base: "80px", lg: "160px"}} px={{base: '16px', lg: 0}}>
			<Flex maxW="7xl" justifyContent="center" mb="32px" gap="20px">
				<Soya />
				<Cora />
				<Whea />
			</Flex>
			<Flex maxW="7xl" mb="32px">
				<Text
					textAlign="center"
					color="gray.900"
					fontSize={{base:"18px", lg:"20px"}}
					lineHeight={{base: '28px', lg:"30px"}}
					fontWeight="500"
					maxW="560px"
				>
					{intl.formatMessage({ id: 'visa.whyFoot' })}
				</Text>
			</Flex>
			<Text
				textAlign="center"
				color="primary.700"
				fontSize="16px"
				lineHeight="24px"
				fontWeight="500"
			>
				{intl.formatMessage({ id: 'visa.whyFootWant' })}
			</Text>
		</Flex>
	);
};
export default Token;
