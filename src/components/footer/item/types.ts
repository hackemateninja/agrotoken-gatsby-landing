export interface ILink {
	title?: string;
	url?: string;
	isExternal?: boolean;
}
export interface IItemFooterProps {
	title: string;
	isExternal?: boolean;
	links: Array<ILink>;
}
