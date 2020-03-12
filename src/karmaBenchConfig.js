const chalk = require('chalk');
const formatBenchmark = require('./formatBenchmark');

const watch = process.argv.includes('--watch');

/**
 * Returns a config function that can be used with karma-benchmark. Sets up karma-benchmark to run in Chrome headless with karma-benchmarkjs-reporter (with the local formatBenchmark formatter), and webpack in production mode. Looks for files in a bench directory that match \*\*\/\*.bench.js.
 *
 * @example
 * create a file in the root of your project called karma.bench.conf.js:
 *
 * ```javascript
 * const {karmaBenchConfig} = require('karma-webpack-bundle');
 *
 * module.exports = karmaBenchConfig();
 * ```
 *
 * and add a script to package.json:
 *
 * ```
 *     "bench": "karma start karma.bench.conf.js"
 * ```
 *
 * then run it:
 *
 * ```
 * npm run bench
 * ```
 *
 * @name karmaBenchConfig
 *
 * @param {object} [settings] - Overrides any of the provided settings.
 *
 * @returns {Function}
 */
module.exports = function(settings = {}) {
	return function(config) {
		config.set({
			frameworks: ['benchmark'],
			singleRun: !watch,
			autoWatch: watch,
			concurrency: 1,
			browsers: ['ChromeHeadless'],
			files: ['bench/**/*.bench.js'],
			preprocessors: {
				'bench/**/*.bench.js': ['webpack']
			},
			reporters: ['benchmark'],
			benchmarkReporter: {
				decorator: '•',
				formatBenchmark,
				style: {
					decorator: chalk.gray,
					hz: chalk.greenBright,
					hzUnits: chalk.italic.gray,
					suite: chalk.bold.cyan
				}
			},
			webpack: {
				mode: 'production',
				module: {
					rules: [{
						test: /\.less$/u,
						loader: 'null-loader'
					}]
				},
				watch,
				node: {
					fs: 'empty'
				}
			},
			webpackServer: {
				stats: 'errors-only'
			},
			...settings
		});
	};
};
