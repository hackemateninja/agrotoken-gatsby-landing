// packages
import React, { FC } from 'react';
import { useIntl } from 'gatsby-plugin-react-intl';
import {
	Tabs,
	TabList,
	Tab,
	TabPanels,
	SimpleGrid,
	TabPanel,
	Heading,
	Image,
	Accordion,
	AccordionItem,
	AccordionButton,
	Box,
	AccordionIcon,
	AccordionPanel,
} from '@chakra-ui/react';

//types
import { IMerchantsProps } from '@comp/merchants/types';

const Merchants: FC<IMerchantsProps> = ({ device, merchants }) => {

	if (device === 'sm') {
		return (
			<Accordion allowMultiple pt={8} w="100%">
				{merchants.map((merchant) => (
					merchant.merchants.length > 0 && <AccordionItem key={merchant.id}>
						<AccordionButton borderRadius={3}>
							<Box flex="1" textAlign="left">
								<Heading as="h3" fontWeight="bold" fontSize="xl">
									{merchant.name}
								</Heading>
							</Box>
							<AccordionIcon />
						</AccordionButton>
						<AccordionPanel pb={4}>
							<SimpleGrid
								alignItems="center"
								justifyItems="center"
								spacingY={6}
								columns={[2, 3]}
							>
								{merchant.merchants.map((item) => (
									item.img && <Image
										key={item.id}
										w={[50, 70]}
										objectFit="contain"
										src={item.img.url}
										alt={item.name}
									/>
								))}
							</SimpleGrid>
						</AccordionPanel>
					</AccordionItem>
				))}
			</Accordion>
		);
	}
	return (
		<Tabs w="100%" pt={4} size="md" variant="enclosed" isFitted>
			<TabList>
				{merchants.map((merchant) => (
					merchant.merchants.length > 0 && <Tab
						key={merchant.id}
						color="gray.500"
						_selected={{ color: 'gray.700', fontWeight: 'medium' }}
					>
						{merchant.name}
					</Tab>
				))}
			</TabList>
			<TabPanels>
				{merchants.map((merchant) => (
					merchant.merchants.length > 0 && <TabPanel p={0} key={merchant.id}>
						<SimpleGrid
							mt={16}
							key={merchant.id}
							alignItems="center"
							justifyItems="center"
							spacingY={6}
							columns={[2, 3, 4]}
						>
							{merchant.merchants.map((item) => (
								item.img && <Image
									key={item.id}
									w={100}
									objectFit="contain"
									src={item.img.url}
									alt={item.name}
								/>
							))}
						</SimpleGrid>
					</TabPanel>
				))}
			</TabPanels>
		</Tabs>
	);
};

export default Merchants;
