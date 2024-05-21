/**
 * @see documentation about rules
 * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/naming-convention.md
 * https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks
 *
 */

module.exports = {
	globals: {
		__PATH_PREFIX__: true,
	},
	env: {
		es2021: true,
		node: true,
		jest: true,
	},
	extends: [
		'react-app',
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier',
		'plugin:import/errors',
		'plugin:import/warnings',
	],
	settings: {
		'react': {
			version: 'detect',
		},
		'import/resolver': {
			typescript: {},
			node: {
				paths: ['.'],
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
			},
			webpack: {
				config: {
					resolve: {
						extensions: ['.js', '.jsx', '.ts', '.tsx'],
					},
				},
			},
		},
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
	},
	plugins: ['import', 'react', '@typescript-eslint', 'react-hooks'],
	rules: {
		'semi': ['error', 'always'],
		'quotes': ['error', 'single'],
		'indent': 'off',
		'no-console': ['error', { allow: ['warn', 'error'] }],
		'no-var': 'error',
		'no-undef': 'error',
		'no-empty-pattern': 'off',
		'object-curly-spacing': ['error', 'always'],
		'react/react-in-jsx-scope': 'off',
		'react/display-name': 'off',
		'react/jsx-uses-react': 'error',
		'react/jsx-uses-vars': 'error',
		'react/no-unescaped-entities': 'off',
		'react/prop-types': 'off',
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
		'import/newline-after-import': ['warn', { count: 1 }],
		'import/no-unresolved': 1,
		'import/order': [
			'warn',
			{
				'groups': [
					'builtin',
					'external',
					'internal',
					'parent',
					'sibling',
					'index',
				],
				'alphabetize': { order: 'asc' },
				'newlines-between': 'ignore',
			},
		],
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/explicit-member-accessibility': 'off',
		'@typescript-eslint/member-delimiter-style': 'off',
		'@typescript-eslint/no-var-requires': 'off',
		'@typescript-eslint/no-use-before-define': 'off',
		'@typescript-eslint/ban-ts-ignore': 'off',
		'@typescript-eslint/no-unescaped-entities': 'off',
		'@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
	},
	overrides: [
		{
			files: ['*.ts', '*.tsx'],
			rules: {
				'no-undef': 'off',
			},
		},
	],
};
