export interface IAskItem {
	id: string;
	text: string;
}

export interface IAsk {
	id: string,
	title: string,
	desc: string;
	items: Array<IAskItem>;
}
