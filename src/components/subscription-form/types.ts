import { IVariantHeader } from '@comp/header/types';

export interface ISubscriptionFormProps {
	placeholder: string;
	buttonText: string;
	errorMessage: string;
	variant: IVariantHeader;
	comesFrom?: string;
}

export type Inputs = {
	email: string;
};

export type IMailChimp = {
	result: string;
	msg: string;
};
