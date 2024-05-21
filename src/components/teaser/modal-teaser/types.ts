import {IVariantHeader} from "@comp/header/types";

export interface ITeaserModalProps {
	isOpen: boolean;
	onClose: () => void;
	email?: string;
	comesFrom?: string;
	url: string;
	variant?: IVariantHeader;
}
