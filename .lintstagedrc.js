const path = require('path');

const buildEslintCommand = (filenames) =>
	`yarn lint --fix --max-warnings=0 ${filenames
		.map((f) => path.relative(process.cwd(), f))
		.join('*.{js,jsx,ts,tsx}')}`;

const buildFormat = (filenames) =>
	`prettier --write ${filenames
		.map((f) => path.relative(process.cwd(), f))
		.join('*.{js,jsx,ts,tsx}')}`;

const buildTest = (filenames) =>
	`jest ${filenames
		.map((f) => path.relative(process.cwd(), f))
		.join('*.{js,jsx,ts,tsx}')}`;

const buildTypeCheck = (filenames) =>
	`tsc --project tsconfig.json --pretty --noEmit ${filenames
		.map((f) => path.relative(process.cwd(), f))
		.join('*.{js,jsx,ts,tsx}')}`;

module.exports = {
	'*.{js,jsx,ts,tsx}': [
		buildFormat,
		buildTypeCheck,
		buildEslintCommand,
		buildTest,
	],
};
