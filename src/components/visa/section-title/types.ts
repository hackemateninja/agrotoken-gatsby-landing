export type IVariantSectionTitle = "light" | "dark";

export interface ISectionTitleProps {
	sectionName?: string;
	title?: string;
	desc?: string;
	variant?: IVariantSectionTitle;
}
