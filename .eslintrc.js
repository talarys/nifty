module.exports = {
	env: {
		es2021: true,
		'react-native/react-native': true,
	},
	extends: ['plugin:react/recommended', 'xo'],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react', 'react-native'],
	rules: {
		'react/react-in-jsx-scope': 'off',
	},
};
