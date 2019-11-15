const wallabyWebpack = require('wallaby-webpack');
const testRunner = require('test-runner-config');

module.exports = function(testRunnerConfig, settings = {}) {
	const files = testRunner.getWallabyFiles(testRunnerConfig, {
		css(file) {
			return {pattern: file, instrument: false, load: true};
		},
		helper(file) {
			return {pattern: file, instrument: false, load: false};
		},
		src(file) {
			return {pattern: file, instrument: true, load: false};
		},
		specs(file) {
			return {pattern: file, instrument: false, load: false};
		}
	});

	return function(wallaby) {
		return {
			testFramework: 'mocha',
			env: {kind: 'chrome'},
			files: files.files,
			tests: files.tests,
			postprocessor: wallabyWebpack({
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
						test: /\.js/,
						exclude: /node_modules/,
						loader: 'babel-loader'
					}]
				},
				devtool: 'source-map'
			}),
			compilers: {'**/*.js': wallaby.compilers.babel()},
			setup() {
				window.__moduleBundler.loadTests();
			},
			lowCoverageThreshold: 100,
			...settings
		};
	};
};
