import React, { FC } from 'react';
import { Flex, Heading, Image, Text } from '@chakra-ui/react';
import { useIntl } from 'gatsby-plugin-react-intl';
import SubscriptionForm from '@comp/subscription-form';
import ISubscriptionBoxProps from "@comp/visa/subscription-box/types";

const SubscriptionBox: FC<ISubscriptionBoxProps> = ({variant, variantUrl}) => {

	const intl = useIntl();

	return (
		<Flex id='sub-box' pt={{base:0, lg: variant === 'big' ? '192px' : '96px'}} pb="127px">
			<Flex flexDir="column" maxW="7xl" px={4} mx="auto">
				<Flex
					borderRadius="10px"
					flexDir={{ base: 'column-reverse', lg: 'row' }}
					alignItems="center"
					background="url(/images/card-background.png) no-repeat center"
					backgroundSize="cover"
				>
					<Flex
						alignItems={{ base: 'center', lg: 'flex-start' }}
						pt="57px"
						w={{ base: '100%', lg: '45%' }}
					>
						<Image mx="auto" src="/images/visa-card-phone.png" mb="-65px" />
					</Flex>
					<Flex
						pt={{ base: '53px', lg: 0 }}
						px={{ base: 4, lg: 0 }}
						mb={{ base: '34px', lg: 0 }}
						pr={{ base: 4, lg: '64px' }}
						flexDir="column"
						alignItems={{ base: 'center', lg: 'flex-start' }}
						w={{ base: '100%', lg: '50%' }}
					>
						<Heading
							fontWeight="500"
							mb="4px"
							fontSize={{base:"30px", lg:"36px"}}
							lineHeight={{base:"38px", lg: "44px"}}
							textAlign={{ base: 'center', lg: 'left' }}
							color="white"
						>
							<Text as="span">
								{intl.formatMessage({ id: 'visa.boxTitleF' })}
								<Text as="span" color="primary.500">
									{intl.formatMessage({ id: 'visa.boxTitleSpan' })}
								</Text>
							</Text>
							<Text as="span">{intl.formatMessage({ id: 'visa.boxTitleS' })}</Text>
						</Heading>
						<Text
							textAlign={{ base: 'center', lg: 'left' }}
							fontSize="16px"
							fontWeight="400"
							lineHeight="24px"
							mb="18px"
							color="white"
						>
							{intl.formatMessage({ id: 'visa.boxDesc' })}
						</Text>
						<SubscriptionForm
							variant={variantUrl}
							errorMessage={intl.formatMessage({ id: 'contact.error.email' })}
							placeholder={intl.formatMessage({ id: 'teaser.placeholder' })}
							buttonText={intl.formatMessage({ id: 'visa.boxButton' })}
						/>
					</Flex>
				</Flex>
			</Flex>
		</Flex>
	);
};
export default SubscriptionBox;
