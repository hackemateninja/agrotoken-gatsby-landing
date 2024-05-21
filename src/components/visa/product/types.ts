export type IVariantProduct = 'action' | 'no-action'

export default interface IProductProps{
	variant?: IVariantProduct;
	onClick?: () => void;
	buttonName?: string;
};
