declare module '*.svg' {
	const content: any;
	export default content;
}
declare module 'gatsby-plugin-mailchimp' {
	export default function addToMailchimp(
		email: string,
		fields?: Object<any>,
		endpointOverride?: any
	): Promise<{ result: string; msg: string }>;
}
