// packages
import { Center, Flex, Image } from '@chakra-ui/react';
import React, { FC } from 'react';

//layout
import Global from '@layouts/global';
import ContactForm from '@comp/contact-form';
import URLS from '@config/urls';
import HomeSeo from "@config/home";

//contact page
const ContactPage: FC = () => {
	return (
		<Global>
			<Flex flexDir={{ base: 'column', lg: 'row' }} maxW="7xl" mx="auto">
				<Flex flexDir="column" px={16} mb={16} w={{ base: '100%', lg: '60%' }}>
					<ContactForm
						contactURL={URLS.getInTouch}
						title="contact.form.heading"
						helpText="contact.form.subtitle"
						description="contact.form.text1"
					/>
				</Flex>
				<Center w={{ base: '100%', lg: '40%' }}>
					<Image src="/images/register.png" />
				</Center>
			</Flex>
		</Global>
	);
};
export default ContactPage;
export function Head() {
	return (
		<>
			<title>{HomeSeo.title}</title>
			<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
			<meta name="description" content={HomeSeo.description}/>
			<meta
				name="keywords"
				content={HomeSeo.keyWords.join(" ")}
			/>
		</>
	)
}

