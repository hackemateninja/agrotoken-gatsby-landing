import {IVariantHeader} from "@comp/header/types";

export type IVariantSubscriptionBox = 'big' | 'small';

export default interface ISubscriptionBoxProps {
	variant?: IVariantSubscriptionBox;
	variantUrl: IVariantHeader
}
