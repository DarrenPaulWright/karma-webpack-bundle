/**
 * @name Installation
 * @summary
 *
 * ```
 * npm install karma-webpack-bundle --save-dev
 * ```
 */
module.exports = {
	benchSettings: require('./src/benchSettings.js'),
	formatBenchmark: require('./src/formatBenchmark.js'),
	karmaBenchConfig: require('./src/karmaBenchConfig.js'),
	karmaConfig: require('./src/karmaConfig.js'),
	wallabyConfig: require('./src/wallabyConfig.js')
};
