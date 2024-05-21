//packages
import React, { FC } from 'react';
import {graphql, useStaticQuery} from "gatsby";
import { useIntl } from 'gatsby-plugin-react-intl';
import {
	Flex,
	Heading,
	Image,
	useBreakpointValue,
	Box,
} from '@chakra-ui/react';

//components
import Merchants from '@comp/merchants';
import ContactForm from '@comp/contact-form';
import TitleOptions from '@comp/title-options';
import IconFeatureSection from '@comp/icon-feature-section';

//config
import URLS from '@config/urls';
import HomeSeo from "@config/home";

//data
import merchantsFeatures from '@data/merchants-features';

// layout
import Global from '@layouts/global';


//page query
const pageQuery = graphql`
	{
		gcms {
			categories{
				id
				name
				merchants(first: 1000){
					id
					name
					img {
						id
						url
					}
				}
			}
		}
	}
`

const AffiliatedBusinesses: FC = () => {
	const intl = useIntl();

	const device = useBreakpointValue({ base: 'sm', lg: 'lg' });

	const {
		gcms: { categories },
	} = useStaticQuery(pageQuery);

	return (
		<Global>
			<Flex
				maxW={{ base: '100%', lg: '7xl' }}
				mx="auto"
				alignItems="center"
				flexDirection="column"
			>
				<Heading
					color="primary.800"
					mt={{ base: '128px', lg: '80px' }}
					fontWeight="medium"
					fontSize={{ base: 'xl', lg: '36px' }}
				>
					{intl.formatMessage({ id: 'affiliated' })}
				</Heading>
				<Heading
					mt={{ base: 2, lg: 4 }}
					fontWeight="normal"
					textAlign="center"
					fontSize={{ base: '30px', lg: '5xl' }}
				>
					{intl.formatMessage({ id: 'affiliatedTitle' })}
				</Heading>
				<Merchants device={device} merchants={categories} />

				<Box w="100%" py={24} px={{ base: 4, lg: 0 }}>
					<Heading
						as="h3"
						textAlign="center"
						fontSize={{ base: '24px', lg: '48px' }}
						fontWeight="medium"
						mb={{ base: 5, md: 16 }}
					>
						{intl.formatMessage({ id: 'merchantsBenefits.title' })}
					</Heading>
					<IconFeatureSection
						variant="Global"
						columns={4}
						items={merchantsFeatures}
					/>
				</Box>
				<Flex
					px={{ base: 4, md: 0 }}
					w="100%"
					flexDir={{ base: 'column-reverse', lg: 'row' }}
					justifyContent="space-between"
					alignItems={{ base: 'center', lg: 'flex-start' }}
				>
					<Flex w={{ base: '100%', lg: '514px' }} flexDir="column">
						<TitleOptions
							title={device === 'sm' ? '' : 'contactMerchants.form.heading'}
							description={device === 'sm' ? '' : 'contactMerchants.form.text1'}
						/>
						<Image src="/images/bepart.png" alt="merchants-contact" />
					</Flex>
					<Box px={{ base: 4, lg: 0 }} width={{ base: '100%', lg: '458px' }}>
						<ContactForm
							contactURL={`${URLS.merchants}`}
							title={device === 'sm' ? 'contactMerchants.form.heading' : ''}
							description={device === 'sm' ? 'contactMerchants.form.text1' : ''}
							isOneRow={device !== 'sm'}
						/>
					</Box>
				</Flex>
			</Flex>
		</Global>
	);
};
export default AffiliatedBusinesses;

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
