const testRunner = require('test-runner-config');
const isTravis = require('is-travis');
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
 * create a file in the root of your project called karma.conf.js:
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
 * @name karmaConfig
 *
 * @param {Array} [testRunnerConfig] - A valid config for [test-runner-config](https://www.npmjs.com/package/test-runner-config)
 * @param {object} [settings] - Overrides any of the provided settings.
 *
 * @returns {Function}
 */
module.exports = function(testRunnerConfig = defaultTestRunnerConfig, settings = {}) {
	return function(config) {
		config.set({
			frameworks: ['mocha'],
			browsers: ['ChromeHeadless', 'FirefoxHeadless'],
			customLaunchers: {
				FirefoxHeadless: {
					base: 'Firefox',
					flags: ['-headless']
				}
			},
			files: testRunner.getKarmaFiles(testRunnerConfig, { src: exclude }).files,
			preprocessors: testRunner
				.getKarmaFiles(testRunnerConfig, { css: exclude, src: exclude })
				.files
				.reduce((result, pattern) => {
					if (pattern.included !== false) {
						result[pattern] = ['webpack'];
					}
					return result;
				}, {}),
			reporters: ['mocha'].concat(isTravis ? ['coverage', 'coveralls'] : []),
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
				optimization: {
					splitChunks: {
						cacheGroups: {
							vendor: {
								test: /node_modules/u,
								name: 'vendor',
								maxSize: 244000,
								chunks: 'all'
							}
						}
					}
				},
				module: {
					rules: [{
						test: /\.less$/u,
						loader: 'null-loader'
					}, {
						test: /\.js$/u,
						enforce: 'pre',
						exclude: /node_modules/u,
						use: [{
							loader: 'eslint-loader',
							options: {
								cache: false,
								emitWarning: true,
								emitError: true
							}
						}]
					}, {
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
