import { IMeta } from '@comp/seo/types';

export interface ISeoConfig {
	title: string;
	description: string;
	keyWords: Array<string>;
	meta?: Array<IMeta>;
}
