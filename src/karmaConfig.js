const testRunner = require('test-runner-config');
const isTravis = require('is-travis');
const webpack = require('webpack');
const ESLintPlugin = require('eslint-webpack-plugin');
const defaultTestRunnerConfig = require('./defaultTestRunnerConfig.js');

const singleRun = process.argv.includes('--single-run');
const exclude = (file) => ({ pattern: file, included: false });

/**
 * Returns a config function that can be used with karma. Sets up karma to run in Chrome headless and Firefox headless with mocha and karma-mocha-reporter.
 *
 * If --single-run is provided then webpack runs in production mode, otherwise it runs in dev mode.
 *
 * If running on Travis CI then karma-coverage and karma-coveralls are added to reporters
 *
 * By default it Looks for test files in a tests directory that match *.test.js. For source files it looks for index.js, and *.js files in a src directory or lib directory.
 *
 * @example
 * Create a file in the root of your project called karma.conf.js:
 *
 * ```javascript
 * const { karmaConfig } = require('karma-webpack-bundle');
 *
 * module.exports = karmaConfig();
 * ```
 *
 * and add a script or two to package.json:
 *
 * ```
 *     "test": "karma start --single-run",
 *     "test-watch": "karma start",
 * ```
 *
 * then run it:
 *
 * ```
 * npm test
 * ```
 *
 * @function karmaConfig
 *
 * @param {Array} [testRunnerConfig] - A valid config for [test-runner-config](https://www.npmjs.com/package/test-runner-config).
 * @param {object} [settings] - Overrides any of the provided settings.
 *
 * @returns {Function}
 */
module.exports = function(testRunnerConfig = defaultTestRunnerConfig, settings = {}) {
	const files = testRunner.getKarmaFiles(testRunnerConfig, { src: exclude }).files;
	const preprocessors = testRunner
		.getKarmaFiles(testRunnerConfig, { css: exclude, src: exclude })
		.files
		.reduce((result, pattern) => {
			if (pattern.included !== false) {
				result[pattern] = ['webpack'];
			}
			return result;
		}, {});

	return function(config) {
		config.set({
			frameworks: ['mocha', 'webpack'],
			browsers: ['ChromeHeadless', 'FirefoxHeadless'],
			customLaunchers: {
				FirefoxHeadless: {
					base: 'Firefox',
					flags: ['-headless']
				}
			},
			files,
			preprocessors,
			reporters: ['mocha']
				.concat(isTravis ? ['coverage', 'coveralls'] : []),
			mochaReporter: {
				output: 'minimal',
				showDiff: true
			},
			coverageReporter: {
				type: 'lcov',
				dir: 'coverage/'
			},
			webpack: {
				mode: singleRun ? 'production' : 'development',
				plugins: [
					new webpack.NormalModuleReplacementPlugin(/\.(gif|png|svg|jpg|jpeg|css|less)$/u, 'node-noop'),
					new ESLintPlugin({ threads: true })
				],
				module: {
					rules: [{
						test: /\.js/u,
						loader: 'babel-loader'
					}]
				},
				watch: !singleRun
			},
			webpackServer: {
				noInfo: true,
				stats: 'errors-only'
			},
			...settings
		});
	};
};
