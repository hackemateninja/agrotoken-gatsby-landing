// packages
import { Flex, Heading, Text, Tooltip } from '@chakra-ui/react';
import { useIntl } from 'gatsby-plugin-react-intl';
import React, { FC, useEffect, useState } from 'react';

//definitions
import { IExchange } from '@def/IExchange';

// services
import getRates from '@services/getRates';

//svg
import Cora from '@svg/cora.svg';
import Question from '@svg/question.svg';
import Soya from '@svg/soya.svg';
import Whea from '@svg/whea.svg';

// types
import { IRateValuesProps } from './types';

// component that show rate token values
const RateValues: FC<IRateValuesProps> = ({
	isShadow,
	textAlign,
	isStartJustify,
}) => {
	const [rates, setRates] = useState<Array<IExchange>>([]);
	const intl = useIntl();

	//change the text if the align is start
	const textGen = (token: string) => {
		switch (token) {
			case 'soya':
				return `${isStartJustify ? '' : 'Agrotoken'} SOYA: USD  ${
					rates[0] && rates[0].value
				}`;
			case 'cora':
				return `${isStartJustify ? '' : 'Agrotoken'} CORA: USD  ${
					rates[1] && rates[1].value
				}`;
			case 'whea':
				return `${isStartJustify ? '' : 'Agrotoken'} WHEA USD  ${
					rates[2] && rates[2].value
				}`;
			default:
				return '';
		}
	};

	const iconGen = (token: string) => {
		switch (token) {
			case 'soya':
				return <Soya width={isStartJustify ? 20 : 32} />;
			case 'cora':
				return <Cora width={isStartJustify ? 20 : 32} />;
			case 'whea':
				return <Whea width={isStartJustify ? 20 : 32} />;
			default:
				return <Soya width={isStartJustify ? 20 : 32} />;
		}
	};

	const tokens = ['soya', 'cora', 'whea'];

	useEffect(() => {
		// get rates from service
		getRates().then((d) => setRates(d));
	}, []);

	return (
		<>
			<Heading
				as="h5"
				maxW="3xl"
				color="gray.500"
				mb={isStartJustify ? 0 : 5}
				fontWeight="normal"
				fontSize="sm"
				display="flex"
				alignItems="center"
				textAlign={textAlign ? textAlign : { base: 'left', lg: 'center' }}
			>
				<Text mr={2}>{intl.formatMessage({ id: 'rates.title' })}</Text>
				<Tooltip label={intl.formatMessage({ id: 'rates.indexes' })}>
					<Text as="span">
						<Question />
					</Text>
				</Tooltip>
			</Heading>
			<Flex
				flexDir={isStartJustify ? 'row' : { base: 'column', lg: 'row' }}
				flexWrap="wrap"
				alignItems="center"
				w={isStartJustify ? '100%' : { base: 'full', lg: '4xl' }}
				justifyContent={isStartJustify ? 'flex-start' : 'space-between'}
				mx="auto"
			>
				{rates &&
					tokens.map((token, idx) => (
						<Flex
							key={`${idx}`}
							shadow={isShadow ? 'md' : 'none'}
							pt={3}
							pb={3}
							pl={isStartJustify ? 0 : 3}
							pr={3}
							fontSize="sm"
							color="gray.700"
							alignItems="center"
						>
							{iconGen(token)}
							<Text ml={isStartJustify ? 2 : 4}>{textGen(token)}</Text>
						</Flex>
					))}
			</Flex>
		</>
	);
};
export default RateValues;
