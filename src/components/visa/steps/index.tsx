// packages
import React, { FC } from 'react';
import { Flex } from '@chakra-ui/react';
import CardStep from '@comp/visa/steps/card';
import { IStep } from '@comp/visa/steps/types';
import SectionTitle from '@comp/visa/section-title';
import { useIntl } from 'gatsby-plugin-react-intl';
import { visaSteps } from '@data/visa';

const Steps: FC = () => {
	const intl = useIntl();
	return (
		<Flex flexDir="column" px={{base: "16px", lg: 0}}>
			<Flex
				maxW="7xl"
				mx="auto"
				mb={{base:"64px", lg: "124px"}}
				mt={{base:"174px", lg: "74px"}}
				flexDir="column">
				<SectionTitle
					sectionName={intl.formatMessage({ id: 'visa.features' })}
					title={intl.formatMessage({ id: 'visa.featuresTitle' })}
					desc={intl.formatMessage({ id: 'visa.featuresTitle2' })}
				/>
			</Flex>
			<Flex
				flexDir={{base: 'column', lg: 'row'}}
				maxW="7xl"
				mx="auto"
				flexGrow="0"
				alignSelf="stretch"
				gap="77px"
				justifyContent="space-between"
				alignItems="flex-start"
			>
				{visaSteps.map((item: IStep) => (
					<CardStep key={item.id} {...item} />
				))}
			</Flex>
		</Flex>
	);
};
export default Steps;
