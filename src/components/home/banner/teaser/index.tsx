// packages
import {
	Box,
	Flex,
	Heading,
	Image,
	Text,
	useBreakpointValue,
} from '@chakra-ui/react';
import { Link } from 'gatsby';
import { useIntl } from 'gatsby-plugin-react-intl';
import { FC } from 'react';

//svg
import Visa from '@svg/visa.svg';

const TeaserBanner: FC = () => {

	const intl = useIntl();

	const device = useBreakpointValue({base: 'sm', lg: 'lg'});

	return (
		<Link to="tarjeta-agrotoken">
			<Flex
				mt={{ base: '100px', lg: 8 }}
				maxW="1180px"
				w={{ base: '358px', lg: '100%' }}
				mx="auto"
				p="18px"
				flexDir={{ base: 'column', lg: 'row' }}
				borderRadius="2px"
				backgroundImage={{
					base: '/images/banner-teaser-mobile.png',
					lg: '/images/banner-teaser.png',
				}}
				backgroundRepeat="no-repeat"
				alignItems={{ base: 'flex-start', lg: 'center' }}
				justifyContent="space-between"
				_hover={{
					cursor: 'pointer',
					shadow: '0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 14px -2px rgba(16, 24, 40, 0.06)',
					transition: 'shadow 2ms',
				}}
			>
				<Flex
					pt={{ base: '0', lg: '0' }}
					flexDir={{ base: 'column', lg: 'row' }}
					alignItems={{ base: 'flex-start', lg: 'center' }}>
					<Visa/>
					<Box mt={{ base: '16px', lg: '0' }} ml={{ base: 0, lg: '24px' }}>
						<Flex alignItems="center">
							<Heading
								color='white'
								fontSize='18px'
								lineHeight='28px'
								w={{base: '227px', lg: 'auto'}}
								letterSpacing="-0.02em">
								{intl.formatMessage({ id: 'teaser.bannerTitle' })}
							</Heading>
						</Flex>
						<Text
							fontSize="16px"
							fontWeight="400"
							color="white"
							mr={2}
							mb={0}
							lineHeight="24px">
							{intl.formatMessage({ id: 'teaser.bannerText' }, {br: <br/>})}
						</Text>
					</Box>
				</Flex>
				<Image mb='-15px' alignSelf="flex-end" src="/images/banner.png" alt="cards" />
			</Flex>
		</Link>
	);
};
export default TeaserBanner;
