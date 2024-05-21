// packages
import {
	Center,
	Flex,
	Heading,
	Image,
	Box,
	List,
	ListIcon,
	ListItem,
	Text,
} from '@chakra-ui/react';
import { FormattedMessage, useIntl } from 'gatsby-plugin-react-intl';
import React, { FC } from 'react';

// svg
import CheckList from '@svg/checklist.svg';

// types
import selectIntlImage from '@utils/selectIntlImage';
import { ISectionListItem, ISectionListProps } from './types';

// section list to use in home page
const SectionList: FC<ISectionListProps> = ({
	isSimple,
	isReverse,
	title,
	icon,
	items,
	stage,
	desc,
}) => {
	const intl = useIntl();
	const locale = intl.locale;

	if (isSimple) {
		return (
			<Box w="100%" px={4} py={10}>
				<Heading
					mb={6}
					as="h3"
					color="gray.900"
					fontSize={{ base: '2xl', lg: '4xl' }}
					fontWeight="medium"
				>
					<FormattedMessage id={title} />
				</Heading>
				<List spacing={5} color="gray.700">
					{items.map((item: ISectionListItem) => (
						<ListItem key={item.id} alignItems="flex-start" display="flex">
							<ListIcon fontSize={25} as={CheckList} />
							<FormattedMessage id={item.text} />
						</ListItem>
					))}
				</List>
			</Box>
		);
	}
	return (
		<Flex
			justifyContent={'space-between'}
			flexDir={{ base: 'column', lg: isReverse ? 'row-reverse' : 'row' }}
			maxW="8xl"
			px={{ base: 4, lg: 20 }}
			py={{ base: 5, lg: 10 }}
			mx="auto"
		>
			<Flex flexDir="column" my="auto" w={{ base: '100%', lg: '56%' }}>
				{icon}
				<Heading
					mt={6}
					as="h3"
					color="gray.900"
					fontSize={{ base: '2xl', lg: '4xl' }}
					fontWeight="medium"
					mb={4}
				>
					<FormattedMessage id={title} />
				</Heading>
				<Text mb={8} color="gray.700" fontSize={{ base: 'lg', lg: '18px' }}>
					<FormattedMessage id={desc} />
				</Text>
				<List spacing={5} color="gray.700">
					{items.map((item: ISectionListItem) => (
						<ListItem key={item.id} alignItems="flex-start" display="flex">
							<ListIcon fontSize={25} as={CheckList} />
							<FormattedMessage id={item.text} />
						</ListItem>
					))}
				</List>
			</Flex>
			<Center w={{ base: '100%', lg: '40%' }}>
				<Image src={selectIntlImage(locale, stage)} />
			</Center>
		</Flex>
	);
};
export default SectionList;
