// packages
import { useIntl } from 'gatsby-plugin-react-intl';
import React, { FC, ReactNode } from 'react';

//layouts
import { Text, Box, VStack, Center, Link } from '@chakra-ui/react';

import AgrotokenLogo from '../../../src/components/svgs/logo_standard.svg';

const PrivacyPolicy: FC = () => {
	const intl = useIntl();

	return (
		<Center>
			<Box w="50%">
				<Box mb="12" mt="16">
					<Link href="/"><AgrotokenLogo /></Link>
				</Box>
				<Box>
					<Text
						as="u"
						fontSize='3xl'
						fontWeight="medium"
						my="8"
						whiteSpace="pre"
					>
						{intl.formatMessage({ id: 'privacyPolicy.title' })}
					</Text>
					<VStack align="flex-start" spacing={4}>
						<Text>{intl.formatMessage({ id: 'privacyPolicy.intro' })}</Text>

						{/* our CourCommitment */}
						<Text as="u">
							{intl.formatMessage({ id: 'privacyPolicy.ourCommitment.title' })}
						</Text>
						<Text>{intl.formatMessage({ id: 'privacyPolicy.ourCommitment.content' })}</Text>

						{/* dataGathering */}
						<Text as="u">
							{intl.formatMessage({ id: 'privacyPolicy.dataGathering.title' })}
						</Text>
						<Text>{intl.formatMessage({ id: 'privacyPolicy.dataGathering.content.p1' })}</Text>
						<Text>{intl.formatMessage({ id: 'privacyPolicy.dataGathering.content.p2' })}</Text>
						<Text>{intl.formatMessage({ id: 'privacyPolicy.dataGathering.content.p3' })}</Text>
						<Text>{intl.formatMessage({ id: 'privacyPolicy.dataGathering.content.p4' })}</Text>

						{/* personalInfo */}
						<Text as="u">
							{intl.formatMessage({ id: 'privacyPolicy.personalInfo.title' })}
						</Text>
						<Text>{intl.formatMessage({ id: 'privacyPolicy.personalInfo.content.p1' })}</Text>
						<Text>{intl.formatMessage({ id: 'privacyPolicy.personalInfo.content.p2' })}</Text>
						<Text>{intl.formatMessage({ id: 'privacyPolicy.personalInfo.content.p3' })}</Text>

						{/* email */}
						<Text as="u">
							{intl.formatMessage({ id: 'privacyPolicy.email.title' })}
						</Text>
						<Text>{intl.formatMessage({ id: 'privacyPolicy.email.content.p1' })}</Text>
						<Text>{intl.formatMessage({ id: 'privacyPolicy.email.content.p2' })}</Text>
						<Text>{intl.formatMessage({ id: 'privacyPolicy.email.content.p3' })}</Text>

						{/* cookies */}
						<Text as="u">
							{intl.formatMessage({ id: 'privacyPolicy.cookies.title' })}
						</Text>
						<Text>{intl.formatMessage({ id: 'privacyPolicy.cookies.content.p1' })}</Text>
						<Text>{intl.formatMessage({ id: 'privacyPolicy.cookies.content.p2' })}</Text>

						{/* sharing */}
						<Text as="u">
							{intl.formatMessage({ id: 'privacyPolicy.sharing.title' })}
						</Text>
						<Text>{intl.formatMessage({ id: 'privacyPolicy.sharing.content.p1' })}</Text>

						{/* protectingYourInfo */}
						<Text as="u">
							{intl.formatMessage({ id: 'privacyPolicy.protectingYourInfo.title' })}
						</Text>
						<Text>{intl.formatMessage({ id: 'privacyPolicy.protectingYourInfo.content.p1' })}</Text>
						<Text>{intl.formatMessage({ id: 'privacyPolicy.protectingYourInfo.content.p2' })}</Text>
						<Text>{intl.formatMessage({ id: 'privacyPolicy.protectingYourInfo.content.p3' })}</Text>
						<Text>{intl.formatMessage({ id: 'privacyPolicy.protectingYourInfo.content.p4' })}</Text>

						{/* ageRestrictions */}
						<Text as="u">
							{intl.formatMessage({ id: 'privacyPolicy.ageRestrictions.title' })}
						</Text>
						<Text>{intl.formatMessage({ id: 'privacyPolicy.ageRestrictions.content.p1' })}</Text>
						<Text>{intl.formatMessage({ id: 'privacyPolicy.ageRestrictions.content.p2' })}</Text>

						{/* externalLinks */}
						<Text as="u">
							{intl.formatMessage({ id: 'privacyPolicy.externalLinks.title' })}
						</Text>
						<Text>{intl.formatMessage({ id: 'privacyPolicy.externalLinks.content.p1' })}</Text>

						{/* userRights */}
						<Text as="u">
							{intl.formatMessage({ id: 'privacyPolicy.userRights.title' })}
						</Text>
						<Text>{intl.formatMessage({ id: 'privacyPolicy.userRights.content.p1' })}</Text>
						<Text>{intl.formatMessage({ id: 'privacyPolicy.userRights.content.p2' })}</Text>
						<Text>{intl.formatMessage({ id: 'privacyPolicy.userRights.content.p3' })}</Text>
						<Text>{intl.formatMessage({ id: 'privacyPolicy.userRights.content.p4' })}</Text>

						{/* policyUpdates */}
						<Text as="u">
							{intl.formatMessage({ id: 'privacyPolicy.policyUpdates.title' })}
						</Text>
						<Text>{intl.formatMessage({ id: 'privacyPolicy.policyUpdates.content.p1' })}</Text>

						{/* location */}
						<Text as="u">
							{intl.formatMessage({ id: 'privacyPolicy.location.title' })}
						</Text>
						<Text>{intl.formatMessage({ id: 'privacyPolicy.location.content.p1' })}</Text>
						<Text>{intl.formatMessage({ id: 'privacyPolicy.location.content.p2' })}</Text>
						<Text>{intl.formatMessage({ id: 'privacyPolicy.location.content.p3' })}</Text>
						<Text>{intl.formatMessage({ id: 'privacyPolicy.location.content.p4' })}</Text>
						<Text>{intl.formatMessage({ id: 'privacyPolicy.location.content.p5' })}</Text>
						<Text>{intl.formatMessage({ id: 'privacyPolicy.location.content.p6' })}</Text>

						{/* contact */}
						<Text as="u">
							{intl.formatMessage({ id: 'privacyPolicy.contact.title' })}
						</Text>
						<Text>{intl.formatMessage({ id: 'privacyPolicy.contact.content.p1' })}</Text>
					</VStack>
				</Box>
				<Box mb="12" mt="16">
					<Link href="/"><AgrotokenLogo /></Link>
				</Box>
			</Box>
		</Center>
	);
};
export default PrivacyPolicy;
