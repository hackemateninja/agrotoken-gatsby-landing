//packages
import {
	Button,
	Center,
	Divider,
	Flex,
	Heading,
	Image,
	Text,
} from '@chakra-ui/react';
import { Link } from 'gatsby';
import React, { FC } from 'react';

//types
import { ISuccessMessageProps } from './types';

// success message for contact page
const SuccessMessage: FC<ISuccessMessageProps> = ({
	title,
	text,
	image,
	buttonText,
}) => {
	return (
		<Flex
			flexDir={{ base: 'column', lg: 'row' }}
			maxW="7xl"
			mt={{ base: 20, lg: 0 }}
			mx="auto"
		>
			<Flex flexDir="column" my="auto" px={16} w={{ base: '100%', lg: '60%' }}>
				<Heading
					as="h3"
					fontSize={{ base: 'lg', lg: '3xl' }}
					fontWeight="medium"
					mb={2}
				>
					{title}
				</Heading>
				<Text mb={8} color="gray.500" fontSize="md">
					{text}
				</Text>
				<Link to="/">
					<Button size="lg" variant="primary">
						{buttonText}
					</Button>
				</Link>
				<Divider />
			</Flex>
			<Center w={{ base: '100%', lg: '40%' }}>
				<Image src={image} />
			</Center>
		</Flex>
	);
};
export default SuccessMessage;
