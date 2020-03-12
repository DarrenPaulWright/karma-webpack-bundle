const { EOL } = require('os');
const stripAnsi = require('strip-ansi');

/**
 * A plugin for the karma-benchmarkjs-reporter formatBenchmark option. Only current difference with the default formatter is the hz number is passed through toLocaleString to make the number more readable. This is used in karmaBenchConfig.
 *
 * @name formatBenchmark
 *
 * @param {object} benchmark - benchmark
 * @param {object} browser -browser
 * @param {object} config - config
 *
 * @returns {string}
 */
module.exports = (benchmark, browser, config) => {
	const style = config.style;

	const output = [
		style.decorator(config.decorator),
		style.hz(Math.round(benchmark.hz).toLocaleString().padStart(config.hzWidth)),
		style.hzUnits(config.hzUnits),
		config.showBrowser ? style.browser(('[' + browser.name + ']').padStart(config.terminalWidth)) : '',
		EOL
	];

	output.splice(1, 0, style.benchmark(benchmark.name.padEnd(config.terminalWidth - stripAnsi(output.join(' ')).length)));

	return config.colors ? output.join(' ') : stripAnsi(output.join(' '));
};
