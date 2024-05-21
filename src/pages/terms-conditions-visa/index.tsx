// packages
import { useIntl } from 'gatsby-plugin-react-intl';
import React, { FC, ReactNode } from 'react';

//layouts
import { Text, Box, VStack, Center, Link } from '@chakra-ui/react';

import AgrotokenLogo from '../../../src/components/svgs/logo_standard.svg';

const TermsConditionsVisa: FC = () => {
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
							href={intl.formatMessage({
								id: 'termsConditionsVisa.agrotokenLink',
							})}
							fontSize="md"
							fontWeight="medium"
							color="primary.500"
						>
							{intl.formatMessage({ id: 'termsConditionsVisa.agrotokenLink' })}
						</Link>
						<Text as="u" fontSize="md" fontWeight="medium">
							{intl.formatMessage({
								id: 'termsConditionsVisa.agrotokenBusinessName',
							})}
						</Text>
						<Text
							as="u"
							fontSize="md"
							fontWeight="medium"
							mb="4"
							whiteSpace="pre"
						>
							{intl.formatMessage({
								id: 'termsConditionsVisa.title',
							})}
						</Text>
					</Center>
					<VStack align="flex-start" spacing={4}>
						<Text>{intl.formatMessage({ id: 'termsConditionsVisa.p1' })}</Text>
						<Text>{intl.formatMessage({ id: 'termsConditionsVisa.p2' })}</Text>
						<Text>{intl.formatMessage({ id: 'termsConditionsVisa.t1' })}</Text>
						<Text>
							{intl.formatMessage({ id: 'termsConditionsVisa.p1.1' })}
						</Text>
						<Text>
							{intl.formatMessage({ id: 'termsConditionsVisa.p1.2' })}
						</Text>
						<Text>
							{intl.formatMessage({ id: 'termsConditionsVisa.p1.3' })}
						</Text>
						<Text>{intl.formatMessage({ id: 'termsConditionsVisa.t2' })}</Text>
						<Text>
							{intl.formatMessage({ id: 'termsConditionsVisa.p2.1' })}
						</Text>
						<Text>{intl.formatMessage({ id: 'termsConditionsVisa.t3' })}</Text>
						<Text>
							{intl.formatMessage({ id: 'termsConditionsVisa.p3.1' })}
						</Text>
						<Text>
							{intl.formatMessage({ id: 'termsConditionsVisa.p3.1.2' })}
						</Text>
						<Text>
							{intl.formatMessage({ id: 'termsConditionsVisa.p3.1.3' })}
						</Text>
						<Text>
							{intl.formatMessage({ id: 'termsConditionsVisa.p3.2' })}
						</Text>
						<Text>
							{intl.formatMessage({ id: 'termsConditionsVisa.p3.3' })}
						</Text>
						<Text>
							{intl.formatMessage({ id: 'termsConditionsVisa.p3.4' })}
						</Text>
						<Text>{intl.formatMessage({ id: 'termsConditionsVisa.t4' })}</Text>
						<Text>
							{intl.formatMessage({ id: 'termsConditionsVisa.p4.1' })}
						</Text>
						<Text>
							{intl.formatMessage({ id: 'termsConditionsVisa.p4.2' })}
						</Text>
						<Text>
							{intl.formatMessage({ id: 'termsConditionsVisa.p4.3' })}
						</Text>
						<Text>
							{intl.formatMessage({ id: 'termsConditionsVisa.p4.4' })}
						</Text>
						<Text>
							{intl.formatMessage({ id: 'termsConditionsVisa.p4.5' })}
						</Text>
						<Text>
							{intl.formatMessage({ id: 'termsConditionsVisa.p4.6' })}
						</Text>
						<Text>
							{intl.formatMessage({ id: 'termsConditionsVisa.p4.7' })}
						</Text>
						<Text>
							{intl.formatMessage({ id: 'termsConditionsVisa.p4.7.1.1' })}
						</Text>
						<Text>
							{intl.formatMessage({ id: 'termsConditionsVisa.p4.7.1.2' })}
						</Text>
						<Text>
							{intl.formatMessage({ id: 'termsConditionsVisa.p4.7.1.2.3' })}
						</Text>
						<Text>
							{intl.formatMessage({ id: 'termsConditionsVisa.t5.5' })}
						</Text>
						<Text>
							{intl.formatMessage({ id: 'termsConditionsVisa.p5.1' })}
						</Text>
						<Text>
							{intl.formatMessage({ id: 'termsConditionsVisa.p5.2' })}
						</Text>
						<Text>
							{intl.formatMessage({ id: 'termsConditionsVisa.t5.6' })}
						</Text>
						<Text>
							{intl.formatMessage({ id: 'termsConditionsVisa.p6.1' })}
						</Text>
						<Text>
							{intl.formatMessage({ id: 'termsConditionsVisa.p6.2' })}
						</Text>
						<Text>{intl.formatMessage({ id: 'termsConditionsVisa.t7' })}</Text>
						<Text>
							{intl.formatMessage({ id: 'termsConditionsVisa.p7.1' })}
						</Text>
						<Text>
							{intl.formatMessage({ id: 'termsConditionsVisa.p7.2' })}
						</Text>
						<Text>
							{intl.formatMessage({ id: 'termsConditionsVisa.p7.3' })}
						</Text>
						<Text>{intl.formatMessage({ id: 'termsConditionsVisa.t8' })}</Text>
						<Text>
							{intl.formatMessage({ id: 'termsConditionsVisa.p8.1' })}
						</Text>
						<Text>
							{intl.formatMessage({ id: 'termsConditionsVisa.p8.2' })}
						</Text>
						<Text>
							{intl.formatMessage({ id: 'termsConditionsVisa.t8.2' })}
						</Text>
						<Text>
							{intl.formatMessage({ id: 'termsConditionsVisa.p8.2.1' })}
						</Text>
						<Text>
							{intl.formatMessage({ id: 'termsConditionsVisa.p8.2.2' })}
						</Text>
						<Text>
							{intl.formatMessage({ id: 'termsConditionsVisa.p8.2.3' })}
						</Text>
						<Text>{intl.formatMessage({ id: 'termsConditionsVisa.t9' })}</Text>
						<Text>
							{intl.formatMessage({ id: 'termsConditionsVisa.p9.1' })}
						</Text>
						<Text>{intl.formatMessage({ id: 'termsConditionsVisa.t10' })}</Text>
						<Text>{intl.formatMessage({ id: 'termsConditionsVisa.p10' })}</Text>
						<Text>{intl.formatMessage({ id: 'termsConditionsVisa.t11' })}</Text>
						<Text>
							{intl.formatMessage({ id: 'termsConditionsVisa.p11.1' })}
						</Text>
						<Text>
							{intl.formatMessage({ id: 'termsConditionsVisa.p11.2' })}
						</Text>
						<Text>
							{intl.formatMessage({ id: 'termsConditionsVisa.p11.3' })}
						</Text>
						<Text>{intl.formatMessage({ id: 'termsConditionsVisa.t12' })}</Text>
						<Text>{intl.formatMessage({ id: 'termsConditionsVisa.p12' })}</Text>
						<Text>{intl.formatMessage({ id: 'termsConditionsVisa.t13' })}</Text>
						<Text>
							{intl.formatMessage({ id: 'termsConditionsVisa.p13.1' })}
						</Text>
						<Text>
							{intl.formatMessage({ id: 'termsConditionsVisa.p13.2' })}
						</Text>
						<Text>{intl.formatMessage({ id: 'termsConditionsVisa.p14' })}</Text>
						<Text>{intl.formatMessage({ id: 'termsConditionsVisa.p15' })}</Text>
						<Text>{intl.formatMessage({ id: 'termsConditionsVisa.p16' })}</Text>
						<Text>
							{intl.formatMessage({ id: 'termsConditionsVisa.footer' })}
						</Text>
					</VStack>
				</Box>
			</Box>
		</Center>
	);
};
export default TermsConditionsVisa;
