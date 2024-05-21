// packages
import { useIntl } from 'gatsby-plugin-react-intl';
import React, { FC } from 'react';

//components
import SuccessMessage from '@comp/success-message';

//layouts
import Global from '@layouts/global';

// farmer success page
const FarmerPage: FC = () => {
	const intl = useIntl();
	return (
		<Global>
			<SuccessMessage
				title={intl.formatMessage({ id: 'getInTouchSuccess.heading' })}
				text={intl.formatMessage({ id: 'getInTouchSuccess.text1' })}
				image="/images/register.png"
				buttonText={intl.formatMessage({
					id: 'getInTouchSuccess.backToHome.text',
				})}
			/>
		</Global>
	);
};
export default FarmerPage;
