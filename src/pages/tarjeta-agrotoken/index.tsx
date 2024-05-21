//packages
import React, { FC } from 'react';

// components
import Ask from "@comp/visa/ask";
import Benefits from '@comp/visa/benefits';
import Product from '@comp/visa/product';
import Brand from '@comp/visa/brand';
import HeroVisa from '@comp/visa/hero';
import SubscriptionBox from '@comp/visa/subscription-box';
import Token from '@comp/visa/token';

//layouts
import Global from '@layouts/global';
import Steps from "@comp/visa/steps";
import HomeSeo from "@config/home";

const Visa: FC = () => {
	return (
		<Global>
			<HeroVisa />
			<Brand />
			<Benefits />
			<Product />
			<Steps/>
			<Ask/>
			<SubscriptionBox variantUrl='Teaser' />
			<Token />
		</Global>
	);
};

export default Visa;

export function Head() {
	return (
		<>
			<title>{HomeSeo.title}</title>
			<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
			<meta name="description" content={HomeSeo.description}/>
			<meta
				name="keywords"
				content={HomeSeo.keyWords.join(" ")}
			/>
		</>
	)
};
