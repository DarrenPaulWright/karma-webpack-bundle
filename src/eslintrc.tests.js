const { OFF } = require('./eslintErrorTypes.js');

/**
 * An eslint config object that overrides various rules from the main config for test files.
 *
 * @example
 * Create a file in your tests directory called .eslintrc.cjs:
 *
 * ```javascript
 * const { eslintrcTests } = require('karma-webpack-bundle');
 *
 * module.exports = eslintrcTests;
 * ```
 *
 * @name eslintrcTests
 * @type {object}
 */
module.exports = {
	rules: {
		'consistent-this': OFF,
		'init-declarations': OFF,
		'no-new': OFF,
		'import/no-extraneous-dependencies': OFF,
		'unicorn/prevent-abbreviations': OFF,
		'jsdoc/require-jsdoc': OFF,
		'jsdoc/require-description': OFF
	}
};
