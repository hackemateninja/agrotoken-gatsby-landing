import { ReactElement } from 'react';

export interface IStep {
	id: string;
	img: string;
	imgTitle: string;
	title: string;
	desc: string;
	element?: ReactElement;
}
