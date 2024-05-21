// packages
import {
	Box,
	Container,
	Flex,
	Heading,
	Image,
	Link,
	Grid,
	Text,
	GridItem,
} from '@chakra-ui/react';
import { useIntl } from 'gatsby-plugin-react-intl';
import React, { FC } from 'react';

// components
import {
	IBlockChainContracts,
	IBlockChainTool,
} from '@comp/home/blockchain/types';
import IconFeature from '@comp/icon-feature';
import { IIconFeatureItem } from '@comp/icon-feature/types';

// data
import blockchain from '@data/blockchain';

// svg
import ArrowRight from '@svg/arrow-right.svg';

// block chain section
const Blockchain: FC = () => {
	const intl = useIntl();

	const findString = intl.formatMessage({ id: 'blockchain.find1' });
	const findStringTwo = intl.formatMessage({ id: 'blockchain.find2' });

	return (
		<Container
			bgImage="/images/blockchain.png"
			bgPosition="right bottom"
			bgSize={{ base: 300, md: 600, lg: 800 }}
			maxW="full"
			px={{ base: 4, md: 10 }}
			m={0}
			bgRepeat="no-repeat"
		>
			<Box maxW="7xl" mx="auto" py={{ base: '150px', lg: 20 }} px={0}>
				<Box maxW={{ base: 'full', lg: '3xl' }}>
					<Text mb={3} color="success.700">
						Blockchain
					</Text>
					<Heading
						mb={5}
						color="gray.900"
						fontWeight="medium"
						fontSize={{ base: '2xl', lg: '5xl' }}
					>
						{intl.formatMessage({ id: 'blockchain.heading' })}
					</Heading>
					<Text
						mb={12}
						lineHeight="1.75rem"
						color="gray.700"
						fontSize={{ base: 'lg', lg: 'xl' }}
					>
						{intl.formatMessage({ id: 'blockchain.subheading' })}
					</Text>
				</Box>
				<Grid mb={12} maxW="998px" gap={5} templateColumns="repeat(3, 1fr)">
					{blockchain.items.map((item: IIconFeatureItem) => (
						<GridItem
							key={item.id}
							w={{ base: '100%', md: '293px' }}
							colSpan={{ base: 3, md: 2, lg: 1 }}
						>
							<IconFeature
								title={intl.formatMessage({ id: item.title })}
								description={intl.formatMessage({ id: item.desc })}
								icon={item.icon}
								position="flex-start"
								textAlign="left"
							/>
						</GridItem>
					))}
				</Grid>
				<Text mb={6} fontSize="md" color="gray.600">
					{intl.formatMessage({ id: 'blockchain.built' })}
				</Text>
				<Flex mb={12} flexDir="row" flexWrap="wrap">
					{blockchain.tools.map((item: IBlockChainTool) => (
						<Image
							key={item.id}
							w={28}
							objectFit="contain"
							mr={{ base: 4, lg: 8 }}
							src={item.image}
							alt={item.alt}
						/>
					))}
				</Flex>
				<Flex
					flexWrap="wrap"
					as="span"
					maxW="xl"
					alignItems="center"
					justifyContent={{ base: 'flex-start', md: 'space-between' }}
				>
					<ArrowRight />
					<Text fontSize="md" color="gray.600">
						{findString}
					</Text>
					{blockchain.contracts.map((item: IBlockChainContracts) => (
						<Link
							key={item.id}
							target="_blank"
							href={item.link}
							textDecor="underline"
						>
							{' '}
							{item.text}{' '}
						</Link>
					))}
					<Text fontSize="md" mx={{ base: 2, md: 0 }} color="gray.600">
						{findStringTwo}
					</Text>
					<Image
						w={28}
						display="inline"
						src="/images/tools/etherscan.png"
						alt="etherscan"
					/>
				</Flex>
			</Box>
		</Container>
	);
};

export default Blockchain;
