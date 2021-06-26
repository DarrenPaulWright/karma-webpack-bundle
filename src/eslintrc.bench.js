const { OFF } = require('./eslintErrorTypes.js');

/**
 * An eslint config object that overrides various rules from the main config for bench files.
 *
 * @example
 * Create a file in your bench directory called .eslintrc.cjs:
 *
 * ```javascript
 * const { eslintrcBench } = require('karma-webpack-bundle');
 *
 * module.exports = eslintrcBench;
 * ```
 *
 * @name eslintrcBench
 * @type {object}
 */
module.exports = {
	rules: {
		'no-unused-vars': OFF,
		'mocha/max-top-level-suites': OFF
	}
};
