// packages
import React, { FC } from 'react';
import {Box, Button, Flex, Heading, Text, useBreakpointValue} from '@chakra-ui/react';
import { Link } from 'gatsby';
import { useIntl } from 'gatsby-plugin-react-intl';

//svg
import Qatar from '@svg/qatar.svg';
import Arrow from '@svg/arrow-right-white.svg';

const QatarBanner: FC = () => {

	const intl = useIntl();

	const device = useBreakpointValue({base: 'sm', lg: 'lg'});

	return (
		<Link to="agrotoken-catar2022">
		<Flex
			mt={{ base: '100px', lg: 8 }}
			maxW="1180px"
			w={{ base: '358px', lg: '100%' }}
			mx="auto"
			h={{base: 'auto', lg: '160px'}}
			p="18px"
			flexDir={{ base: 'column', lg: 'row' }}
			borderRadius="2px"
			backgroundImage={{
				base:  '/images/banner-qatar-mobile.png',
				lg:  '/images/banner-qatar.png',
			}}
			backgroundRepeat="no-repeat"
			alignItems={{ base: 'flex-start', lg: 'center' }}
			justifyContent="space-between">
			<Flex
				pt={{ base: '0', lg: '0' }}
				flexDir={{ base: 'column', lg: 'row' }}
				alignItems={{ base: 'flex-start', lg: 'center' }}
				sx={{'& svg': {
						w: {base: '154px', lg:'197px'},
						h: {base: '58px', lg:'74px'},
					}}}>
				<Qatar/>
				<Box mt={{ base: '0', lg: 0 }} ml={{ base: 0, lg: '24px' }}>
					<Flex alignItems="center">
						<Heading
							color='white'
							fontSize={{base:'18px', lg: '24px'}}
							lineHeight={{base:'28px', lg: '32px'}}
							w={{base:'227px', lg: 'auto'}}
							letterSpacing="-0.02em">
							{intl.formatMessage({ id: 'qatar.titleF' })}
							<Text as="span">
								#{intl.formatMessage({ id: 'visa.titleF' })}
								<Text as="span" color="primary.600">
									{intl.formatMessage({ id: 'visa.titleSpan' })}
								</Text>
							</Text>
							<Text as="span">
								{device === 'sm' ?
									intl.formatMessage({ id: 'qatar.titleS' }, {br: <br/>}) :
									intl.formatMessage({ id: 'qatar.titleS' }, {br: <span/>})
								}
							</Text>
						</Heading>
					</Flex>
					<Text
						fontSize={{base:'14px', lg: '16px'}}
						fontWeight="400"
						color="white"
						mr={2}
						lineHeight={{base:'20px', lg: '24px'}}>
						{device !== 'sm' ?
							intl.formatMessage({ id: 'qatar.banner' }, {br: <br/>}) :
							intl.formatMessage({ id: 'qatar.banner' }, {br: <span/>})
						}
					</Text>
				</Box>
			</Flex>
			<Link to="agrotoken-catar2022">
				<Button
					variant='primary'
					mt={{base:'10px', lg: 0}}
					fontSize='14px'
					px='16px'
					py='10px'
					sx={{
						'& svg': {
							w: '11px'
						}
					}}>
					<Text mr='12px'>
						{intl.formatMessage({ id: 'qatar.bannerButton' })}
					</Text>
					<Arrow/>
				</Button>
			</Link>
		</Flex>
		</Link>
	);
};
export default QatarBanner;
