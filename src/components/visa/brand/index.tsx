import React, { FC } from 'react';
import { Flex, Image, Text } from '@chakra-ui/react';
import VisaColor from '@svg/visa.svg';
import Algo from '@svg/algorand.svg';
import { useIntl } from 'gatsby-plugin-react-intl';

const Brand: FC = () => {
	const intl = useIntl();
	return (
		<Flex maxW="7xl" mt="70px" mb={{base: '45px', lg: '96px'}} mx="auto" flexDir="column">
			<Text
				textAlign="center"
				fontSize="16px"
				lineHeight="20px"
				fontWeight="500"
				color="gray.500"
				mb="32px"
			>
				{intl.formatMessage({ id: 'visa.companies' })}
			</Text>
			<Flex
				flexDir={{base: 'column', lg: 'row'}}
				justifyContent="center"
				alignItems="center"
				gap={{base: "45px", lg: "90px"}}
				sx={{
					'#blue': {
						width: '126px',
						height: '50px',
						path: {
							fill: 'blue',
						},
					},
				}}
			>
				<VisaColor id="blue" />
				<Algo />
				<Image src="/images/pomelo.png" alt="pomelo" />
			</Flex>
		</Flex>
	);
};
export default Brand;
