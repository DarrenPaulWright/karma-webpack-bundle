const testRunner = require('test-runner-config');
const defaultTestRunnerConfig = require('./defaultTestRunnerConfig.js');

/**
 * Returns a config function that can be used with [wallaby](https://wallabyjs.com/). Sets the test framework to mocha, runs in Chrome headless, and sets up webpack similar to the karma config.
 *
 * By default it Looks for test files in a tests directory that match *.test.js. For source files it looks for index.js, and *.js files in a src directory or lib directory.
 *
 * @example
 * create a file in the root of your project called wallaby.conf.js:
 *
 * ```javascript
 * const { wallabyConfig } = require('karma-webpack-bundle');
 *
 * module.exports = wallabyConfig();
 * ```
 *
 * @function wallabyConfig
 *
 * @param {Array} [testRunnerConfig] - A valid config for [test-runner-config](https://www.npmjs.com/package/test-runner-config).
 * @param {object} [settings] - Overrides any of the provided settings.
 *
 * @returns {Function}
 */
module.exports = function(testRunnerConfig = defaultTestRunnerConfig, settings = {}) {
	const files = testRunner.getWallabyFiles(testRunnerConfig);

	return function(wallaby) {
		return {
			testFramework: 'mocha',
			env: { kind: 'chrome' },
			files: files.files,
			tests: files.tests,
			postprocessor: wallaby.postprocessors.webpack({
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
						test: /\.js/u,
						loader: 'babel-loader'
					}]
				},
				devtool: 'source-map'
			}),
			setup() {
				window.__moduleBundler.loadTests();
			},
			lowCoverageThreshold: 100,
			...settings
		};
	};
};
