// packages
import { Container, Divider } from '@chakra-ui/react';
import React, { FC, useEffect, useState } from 'react';

//components
import FooterMenu from '@comp/footer/menu';
import FooterRegister from '@comp/footer/register';
import FooterSocial from '@comp/footer/social';
import { IFooterProps } from '@comp/footer/types';

//footer component
const Footer: FC<IFooterProps> = ({ variant }) => {
	const [isBigFooter, setIsBigFooter] = useState<boolean>(false);
	const [isRegisterPage, setIsRegisterPage] = useState<boolean>(false);

	const simpleUrls = [
		'agroactiva2022',
		'farmer',
		'merchant',
		'investor',
		'other',
		'get-in-touch',
		'get-in-touch/',
		'forgoted',
	];

	useEffect(() => {
		const handleLocation = () => {
			const locationArray = window.location.pathname.split('/');
			const locationString = locationArray[locationArray.length - 1];
			if (locationString === 'register') {
				setIsBigFooter(true);
				setIsRegisterPage(true);
			} else {
				const url = simpleUrls.find((item) => item === locationString);
				if (url) {
					setIsBigFooter(false);
				} else {
					setIsBigFooter(true);
				}
			}
		};
		handleLocation();
		return () => {
			handleLocation();
		};
	}, [simpleUrls]);

	return (
		<Container
			maxW="full"
			as="footer"
			bgColor={variant === 'Teaser' ? '#011B01' : 'gray.900'}
			color="gray.100"
			px={{ base: 4, lg: 12 }}
			py={{ base: 4, lg: 16 }}
		>
			<Container
				p={0}
				maxW={{ base: 'full', xl: '7xl' }}
				mx={{ base: 0, xl: 'auto' }}
			>
				{isBigFooter ? (
					<>
						<FooterRegister isRegisterPage={isRegisterPage} />
						<Divider h="1px" colorScheme="gray.700" mb={16} />
					</>
				) : null}
				<FooterMenu />
				<Divider mb={8} />
				<FooterSocial />
			</Container>
		</Container>
	);
};

export default Footer;
