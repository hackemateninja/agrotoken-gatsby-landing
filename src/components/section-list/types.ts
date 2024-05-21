// packages
import { ReactElement } from 'react';

export interface ISectionListProps {
	isSimple?: boolean;
	icon?: ReactElement;
	title: string;
	desc?: string;
	stage?: number;
	items: Array<ISectionListItem>;
	isReverse?: boolean;
}
export interface ISectionListItem {
	id: string;
	text: string;
}
export interface ISectionListDataItem extends ISectionListProps {
	id: string;
}
