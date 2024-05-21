import { ReactElement } from 'react';

export interface IMeta {
	name: string;
	content: string;
}

export interface ISeoProps {
	meta?: Array<IMeta>;
	description: string;
	title: string;
}
