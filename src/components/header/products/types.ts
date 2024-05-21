import {IVariantHeader} from "@comp/header/types";

export default interface IHeaderProductsPros {
	name: string;
	onClick?: () => void;
	variant?: IVariantHeader;
}
