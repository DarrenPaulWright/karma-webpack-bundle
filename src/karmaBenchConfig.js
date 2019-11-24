const formatBenchmark = require('./formatBenchmark');
const chalk = require('chalk');

const watch = process.argv.includes('--watch');

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
				formatBenchmark: formatBenchmark,
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
						test: /\.less$/,
						loader: 'null-loader'
					}]
				},
				watch: watch,
				node: {
					fs: "empty"
				}
			},
			webpackServer: {
				stats: 'errors-only'
			},
			...settings
		});
	};
};
