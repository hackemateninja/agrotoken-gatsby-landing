import React, {useMemo} from 'react';
import {IBuilderInterface} from "@comp/home/banner/types";
import QatarBanner from "@comp/home/banner/qatar";
import TeaserBanner from "@comp/home/banner/teaser";

const bannerBuilder = ({variant}: IBuilderInterface) => {

	useMemo(() => console.warn('change banner'), [variant]);

	switch (variant){
		case 'Qatar':
			return <QatarBanner />;
		case 'Teaser':
			return <TeaserBanner />;
		default:
			return null;
	}
};

export default bannerBuilder;
