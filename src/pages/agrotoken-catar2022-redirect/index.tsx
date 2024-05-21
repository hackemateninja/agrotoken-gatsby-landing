import React, {useEffect} from 'react';
import {useIntl} from "gatsby-plugin-react-intl";


const AgrotokenCatar2022Redirect = () => {

	const intl = useIntl();

	useEffect(() => {

		const win = window.open(`https://platform.agrotoken.io/sign-up?utm_source=agrotoken&utm_medium=web&utm_campaign=visa&utm_content=catar2022`, '_self');
		win?.focus();
	}, []);


	return(
		<div/>
	)
}

export default AgrotokenCatar2022Redirect;
