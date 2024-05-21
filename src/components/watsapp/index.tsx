//packages
import {Box, Text, useBreakpointValue} from "@chakra-ui/react";
import {useIntl} from "gatsby-plugin-react-intl";
import React, {FC} from 'react';

//configs
import URLS from "@config/urls";

//svgs
import WP from '@svg/whatsapp.svg';
import WPBig from '@svg/whatsapp-big.svg';

const string = 'https://api.whatsapp.com/send/?phone=5491125518124&text=hola%20quisiera%20saber%20mas%20sobre%20ustedes'

const Whatsapp: FC = () => {
	const intl = useIntl();
	const device = useBreakpointValue({base: 'sm', md: 'md'})
	return(
		<Box
			as='a'
			href={URLS.wp}
			target='_blank'
			position='fixed'
			bottom='24px'
			backgroundColor={{base: 'transparent', md: 'white'}}
			right='30px'
			boxShadow={{base: 'none', md: '0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06)'}}
			paddingY={{base: 0, md:'8px'}}
			paddingX={{base: 0, md:'12px'}}
			borderRadius={{base: 0, md:'6px'}}
			display='flex'
			gap={{base: 0, md:'4px'}}
			alignItems='center'
			alignContent='stretch'>
			{device === 'sm' ?
				<WPBig/> :
				<>
					<WP />
					<Text fontWeight='500' fontSize='12px' lineHeight='18px' textAlign='center' color='gray.700'>
						{intl.formatMessage({id: 'wp'})}
					</Text>
				</>
			}
		</Box>
	);
};
export default Whatsapp;
