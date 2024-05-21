// packages
import React, {FC} from 'react';
import {useIntl} from "gatsby-plugin-react-intl";
import {Box, useBreakpointValue, useDisclosure} from "@chakra-ui/react";

//components
import SubscriptionBox from "@comp/visa/subscription-box";
import Product from "@comp/visa/product";
import QatarHero from "@comp/qatar/hero";
import QatarFirstSection from "@comp/qatar/first";
import QatarSecondSection from "@comp/qatar/second";
import QatarThirdSection from "@comp/qatar/third";

//layout
import Qatar from "@layouts/qatar";
import HomeSeo from "@config/home";


const AgroQatar2022: FC = () => {

	const intl = useIntl();

	const device = useBreakpointValue({base: 'sm', lg: 'lg'});

	const handleRedirect = () => {
		const linkCard = `https://agrotoken.io/${intl.locale}/tarjeta-agrotoken?utm_source=agrotoken&utm_medium=web&utm_campaign=visa&utm_content=catar2022`
		window.open(linkCard, '_self')
	}

	return (
		<Qatar>
			<QatarHero />
			<QatarFirstSection />
			<Box h='40px' />
			<QatarSecondSection />
			<Box h='48px' />
			<QatarThirdSection />
			<Product
				variant='action'
				onClick={handleRedirect}
				buttonName={intl.formatMessage({ id: 'qatar.buttonProduct' })}
			/>
			{device === 'sm' ? <Box h='60px' /> :null}
			<SubscriptionBox variantUrl='Qatar' variant='big' />
		</Qatar>
	);
};

export default AgroQatar2022;

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

