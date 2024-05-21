// packages
import { useIntl } from 'gatsby-plugin-react-intl';
import React, { FC, ReactNode } from 'react';

//layouts
import { Text, Box, VStack, Center, Link } from '@chakra-ui/react';

import AgrotokenLogo from '../../../src/components/svgs/logo_standard.svg';

const TermsConditions: FC = () => {
	const intl = useIntl();
	const locale = intl.locale;

	return (
		<Center>
			<Box w="50%">
				<Box my="4">
					<AgrotokenLogo />
				</Box>
				<Box>
					<Center flexDirection="column">
						<Link
							href={intl.formatMessage({ id: 'termsConditions.agrotokenLink' })}
							fontSize="md"
							fontWeight="medium"
							color="primary.500"
						>
							{intl.formatMessage({ id: 'termsConditions.agrotokenLink' })}
						</Link>
						<Text as="u" fontSize="md" fontWeight="medium">
							{intl.formatMessage({
								id: 'termsConditions.agrotokenBusinessName',
							})}
						</Text>
						<Text
							as="u"
							fontSize="md"
							fontWeight="medium"
							mb="4"
							whiteSpace="pre"
						>
							{intl.formatMessage({ id: 'termsConditions.title' })}
						</Text>
					</Center>
					<VStack align="flex-start" spacing={4}>
						<Text>{intl.formatMessage({ id: 'termsConditions.p1' })}</Text>
						<Text fontWeight="bold">
							{intl.formatMessage({ id: 'termsConditions.p2' })}
						</Text>
						<Text>{intl.formatMessage({ id: 'termsConditions.p3' })}</Text>
						<Text>{intl.formatMessage({ id: 'termsConditions.p4' })}</Text>
						<Text as="u">
							{intl.formatMessage({ id: 'termsConditions.t1' })}
						</Text>
						<Text>{intl.formatMessage({ id: 'termsConditions.p1.1' })}</Text>
						<Text>{intl.formatMessage({ id: 'termsConditions.p1.2' })}</Text>
						<Text>{intl.formatMessage({ id: 'termsConditions.p1.3' })}</Text>
						<Text>{intl.formatMessage({ id: 'termsConditions.p1.4' })}</Text>
						<Text>{intl.formatMessage({ id: 'termsConditions.p1.5' })}</Text>
						<Text>{intl.formatMessage({ id: 'termsConditions.p1.6' })}</Text>
						<Text as="u">
							{intl.formatMessage({ id: 'termsConditions.t2' })}
						</Text>
						<Text>{intl.formatMessage({ id: 'termsConditions.p2.1' })}</Text>
						<Text>{intl.formatMessage({ id: 'termsConditions.p2.2' })}</Text>
						<Text>{intl.formatMessage({ id: 'termsConditions.p2.3' })}</Text>
						<Text>{intl.formatMessage({ id: 'termsConditions.p2.4' })}</Text>
						<Text>{intl.formatMessage({ id: 'termsConditions.p2.5' })}</Text>
						<Text>{intl.formatMessage({ id: 'termsConditions.p2.6' })}</Text>
						<Text>{intl.formatMessage({ id: 'termsConditions.p2.7' })}</Text>
						<Text as="u">
							{intl.formatMessage({ id: 'termsConditions.t3' })}
						</Text>
						<Text>{intl.formatMessage({ id: 'termsConditions.p3.1' })}</Text>
						<Text>{intl.formatMessage({ id: 'termsConditions.p3.2' })}</Text>
						<Text>{intl.formatMessage({ id: 'termsConditions.p3.3' })}</Text>
						<Text>{intl.formatMessage({ id: 'termsConditions.p3.4' })}</Text>
						<Text>{intl.formatMessage({ id: 'termsConditions.p3.5' })}</Text>
						<Text as="u">
							{intl.formatMessage({ id: 'termsConditions.t4' })}
						</Text>
						<Text>{intl.formatMessage({ id: 'termsConditions.p4.1' })}</Text>
						<Text>{intl.formatMessage({ id: 'termsConditions.p4.2' })}</Text>
						<Text>{intl.formatMessage({ id: 'termsConditions.p4.3' })}</Text>
						<Text>{intl.formatMessage({ id: 'termsConditions.p4.4' })}</Text>
						<Text>{intl.formatMessage({ id: 'termsConditions.p4.5' })}</Text>
						<Text>{intl.formatMessage({ id: 'termsConditions.p4.6' })}</Text>
						<Text as="u">
							{intl.formatMessage({ id: 'termsConditions.t5' })}
						</Text>
						<Text>{intl.formatMessage({ id: 'termsConditions.p5.1' })}</Text>
						<Text>{intl.formatMessage({ id: 'termsConditions.p5.2' })}</Text>
						<Text as="u">
							{intl.formatMessage({ id: 'termsConditions.t6' })}
						</Text>
						<Text>{intl.formatMessage({ id: 'termsConditions.p6.1' })}</Text>
						<Text as="u">
							{intl.formatMessage({ id: 'termsConditions.t7' })}
						</Text>
						<Text>{intl.formatMessage({ id: 'termsConditions.p7.1' })}</Text>
						<Text>{intl.formatMessage({ id: 'termsConditions.p7.2' })}</Text>
						<Text>{intl.formatMessage({ id: 'termsConditions.p7.3' })}</Text>
						<Text>{intl.formatMessage({ id: 'termsConditions.p7.4' })}</Text>
						<Text>{intl.formatMessage({ id: 'termsConditions.p7.5' })}</Text>
						<Text>{intl.formatMessage({ id: 'termsConditions.p7.6' })}</Text>
						<Text>{intl.formatMessage({ id: 'termsConditions.p7.7' })}</Text>
						<Text>{intl.formatMessage({ id: 'termsConditions.p7.8' })}</Text>
						<Text>{intl.formatMessage({ id: 'termsConditions.p7.9' })}</Text>
						<Text>{intl.formatMessage({ id: 'termsConditions.p7.10' })}</Text>
						<Text as="u">
							{intl.formatMessage({ id: 'termsConditions.t8' })}
						</Text>
						<Text>{intl.formatMessage({ id: 'termsConditions.p8' })}</Text>
						<Text as="u">
							{intl.formatMessage({ id: 'termsConditions.t9' })}
						</Text>
						<Text>{intl.formatMessage({ id: 'termsConditions.p9.1' })}</Text>
						<Text as="u">
							{intl.formatMessage({ id: 'termsConditions.t10' })}
						</Text>
						<Text>{intl.formatMessage({ id: 'termsConditions.p10.1' })}</Text>
						<Text>{intl.formatMessage({ id: 'termsConditions.p10.2' })}</Text>
						<Text as="u">
							{intl.formatMessage({ id: 'termsConditions.t11' })}
						</Text>
						<Text>{intl.formatMessage({ id: 'termsConditions.p11.1' })}</Text>
						<Text>{intl.formatMessage({ id: 'termsConditions.p11.2' })}</Text>
						<Text as="u">
							{intl.formatMessage({ id: 'termsConditions.t12' })}
						</Text>
						<Text>{intl.formatMessage({ id: 'termsConditions.p12.1' })}</Text>
						<Text>{intl.formatMessage({ id: 'termsConditions.p12.2' })}</Text>
						<Text>{intl.formatMessage({ id: 'termsConditions.p12.3' })}</Text>
						<Text as="u">
							{intl.formatMessage({ id: 'termsConditions.t13' })}
						</Text>
						<Text>{intl.formatMessage({ id: 'termsConditions.p13.1' })}</Text>
						<Text>{intl.formatMessage({ id: 'termsConditions.p13.2' })}</Text>
						<Text>{intl.formatMessage({ id: 'termsConditions.p13.3' })}</Text>
						<Text>{intl.formatMessage({ id: 'termsConditions.p13.4' })}</Text>
						<Text>{intl.formatMessage({ id: 'termsConditions.p13.5' })}</Text>
						<Text>{intl.formatMessage({ id: 'termsConditions.p13.6' })}</Text>
						<Text as="u">
							{intl.formatMessage({ id: 'termsConditions.t14' })}
						</Text>
						<Text>{intl.formatMessage({ id: 'termsConditions.p14.1' })}</Text>
						<Text as="u">
							{intl.formatMessage({ id: 'termsConditions.t15' })}
						</Text>
						<Text>{intl.formatMessage({ id: 'termsConditions.p15.1' })}</Text>
						<Text as="u">
							{intl.formatMessage({ id: 'termsConditions.t16' })}
						</Text>
						<Text>{intl.formatMessage({ id: 'termsConditions.p16.1' })}</Text>
						<Text as="u">
							{intl.formatMessage({ id: 'termsConditions.t17' })}
						</Text>
						<Text>{intl.formatMessage({ id: 'termsConditions.p17.1' })}</Text>
						<Text>{intl.formatMessage({ id: 'termsConditions.p17.2' })}</Text>
						<Text as="u">
							{intl.formatMessage({ id: 'termsConditions.t18' })}
						</Text>
						<Text>{intl.formatMessage({ id: 'termsConditions.p18.1' })}</Text>
						<Text>{intl.formatMessage({ id: 'termsConditions.p18.2' })}</Text>
						<Text>{intl.formatMessage({ id: 'termsConditions.p18.3' })}</Text>
						<Text>{intl.formatMessage({ id: 'termsConditions.p18.4' })}</Text>
						<Text>{intl.formatMessage({ id: 'termsConditions.p18.5' })}</Text>
						<Text>{intl.formatMessage({ id: 'termsConditions.p18.6' })}</Text>
						<Text>{intl.formatMessage({ id: 'termsConditions.p18.7' })}</Text>
						<Text as="u">
							{intl.formatMessage({ id: 'termsConditions.t19' })}
						</Text>
						<Text>{intl.formatMessage({ id: 'termsConditions.p19.1' })}</Text>
						<Text>{intl.formatMessage({ id: 'termsConditions.p19.2' })}</Text>
						<Text>{intl.formatMessage({ id: 'termsConditions.p19.3' })}</Text>
						<Text>{intl.formatMessage({ id: 'termsConditions.p19.4' })}</Text>
						<Text>{intl.formatMessage({ id: 'termsConditions.p19.5' })}</Text>
						<Text>{intl.formatMessage({ id: 'termsConditions.p19.6' })}</Text>
						<Text>{intl.formatMessage({ id: 'termsConditions.footer' })}</Text>
					</VStack>
				</Box>
			</Box>
		</Center>
	);
};
export default TermsConditions;
