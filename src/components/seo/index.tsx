// packages
import React, { FC } from 'react';

// types
import { ISeoProps } from './types';

// component that handles SEO
const SEO: FC<ISeoProps> = ({ meta, title, description }) => (
	<>
		<title>{title}</title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<meta name="description" content={description} />
		<meta
			name="keywords"
			content="agrotoken, blockchain, etherium, tokenization, tokenizacion, agrocommodities, visa, teaser, cora, whea, soya, etherscan, pomelo, algorand"
		/>
		{meta?.map((i, idx) => (
			<meta key={idx.toString()} name={i.name} content={i.content} />
		))}
	</>
);
export default SEO;
