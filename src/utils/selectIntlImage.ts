const selectIntlImage = (locale: string, stage: number | undefined): string => {
	if (stage !== 0) {
		return `/images/use-${stage}-${locale.toLocaleLowerCase()}.png`;
	}
	return '/images/get-in-touch.png';
};

export default selectIntlImage;
