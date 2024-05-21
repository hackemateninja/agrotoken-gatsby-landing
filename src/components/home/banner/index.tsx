// packages
import React, { FC } from 'react';
import { useIntl } from 'gatsby-plugin-react-intl';

//builder
import bannerBuilder from "@comp/home/banner/builder";

const Banner: FC = () => {

	const intl = useIntl();

	const cond = intl.locale === 'es' ? 'Qatar' : 'Teaser';

	return bannerBuilder({variant: cond})
};
export default Banner;
