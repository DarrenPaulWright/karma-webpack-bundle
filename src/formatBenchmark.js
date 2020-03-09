var {EOL} = require('os');
var _ = require('lodash');
var stripAnsi = require('strip-ansi');

/**
 * A plugin for the karma-benchmarkjs-reporter formatBenchmark option. Only current difference with the default formatter is the hz number is passed through toLocaleString to make the number more readable. This is used in karmaBenchConfig.
 *
 * @name formatBenchmark
 *
 * @param benchmark
 * @param browser
 * @param config
 *
 * @returns {string}
 */
module.exports = (benchmark, browser, config) => {
	const style = config.style;

	const output = [
		style.decorator(config.decorator),
		style.hz(_.padStart(Math.round(benchmark.hz).toLocaleString(), config.hzWidth)),
		style.hzUnits(config.hzUnits),
		config.showBrowser ? style.browser(_.padStart('[' + browser.name + ']', config)) : '',
		EOL
	];

	output.splice(1, 0, style.benchmark(_.padEnd(benchmark.name, config.terminalWidth - stripAnsi(output.join(' ')).length)));

	return !config.colors ? stripAnsi(output.join(' ')) : output.join(' ');
};
