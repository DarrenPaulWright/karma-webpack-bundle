const testRunner = require('test-runner-config');

const singleRun = process.argv.includes('--single-run');
const exclude = (file) => ({pattern: file, included: false});

module.exports = function(testRunnerConfig, settings = {}) {
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
			files: testRunner.getKarmaFiles(testRunnerConfig, {src: exclude}).files,
			preprocessors: testRunner
				.getKarmaFiles(testRunnerConfig, {css: exclude, src: exclude})
				.files
				.reduce((result, pattern) => {
					if (pattern.included !== false) {
						result[pattern] = ['webpack'];
					}
					return result;
				}, {}),
			reporters: ['mocha'].concat(singleRun ? ['coverage', 'coveralls'] : []),
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
								test: /node_modules/,
								name: 'vendor',
								maxSize: 244000,
								chunks: 'all'
							}
						}
					}
				},
				module: {
					rules: [{
						test: /\.less$/,
						loader: 'null-loader'
					}, {
						test: /\.js$/,
						enforce: 'pre',
						exclude: /node_modules/,
						use: [{
							loader: 'eslint-loader',
							options: {
								configFile: '.eslintrc.json',
								cache: true,
								emitWarning: true,
								emitError: true
							}
						}]
					}, {
						test: /\.js/,
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
