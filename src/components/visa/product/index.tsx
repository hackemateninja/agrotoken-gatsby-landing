//packages
import React, { FC } from 'react';
import {Button, Flex, Image} from '@chakra-ui/react';
import { useIntl } from 'gatsby-plugin-react-intl';

//components
import SectionTitle from '@comp/visa/section-title';

//types
import IProductProps from "./types";

const Product: FC<IProductProps> = ({variant, onClick, buttonName}) => {

	const intl = useIntl();

	return (
		<Flex  flexDir="column" flexGrow={0} alignSelf="stretch" px={{base: '16px', lg: 0}}>
			<Flex maxW="7xl" mx="auto" flexDir="column" mt={{base: "45px", lg: "96px"}}>
				<Image
					src="/images/glasses.png"
					w="141px"
					h="28px"
					mb="32px"
					alignSelf="center"
					alt="agricooltor"
				/>
				<SectionTitle
					title={intl.formatMessage({ id: 'visa.productTitle' })}
					desc={intl.formatMessage({ id: 'visa.productDesc' })}
				/>
				{variant === 'action' ? <Button
					onClick={onClick}
					maxW='129px'
					mx='auto'
					boxShadow='0px 1px 2px rgba(16, 24, 40, 0.05);'
					mt='20px'
					variant="primary"
					height="48px"
					py="12px"
					px="20px">
					{buttonName}
				</Button> : null}
			</Flex>
			<Image src="/images/visarrap.png" alt="visa-app" mx="auto" />
		</Flex>
	);
};
export default Product;
