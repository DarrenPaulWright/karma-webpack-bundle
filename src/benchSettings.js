/**
 * Settings object for karma-benchmark. I don't see any need for benchmarks to run for 5 seconds, so I've provided settings that run the benchmark for 200ms.
 *
 * @example
 * ```javascript
 * const {benchSettings} = require('karma-webpack-bundle');
 *
 * benchmark('how fast is this', () => {
 *     [1, 2, 3].map((x) => x * 2);
 * }, benchSettings);
 * ```
 *
 * @name benchSettings
 * @type {object}
 * @property {number} [maxTime=0.2]
 * @property {number} [minTime=0.2]
 * @property {number} [minSamples=1]
 * @property {number} [delay=0]
 * @property {boolean} [async=true]
 */
module.exports = {
	maxTime: 0.2,
	minTime: 0.2,
	minSamples: 1,
	delay: 0,
	async: true
};
