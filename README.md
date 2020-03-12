# Karma Webpack Bundle

> A personalized bundle of karma libraries and configs
>
> [![npm][npm]][npm-url]
[![deps][deps]][deps-url]
[![size][size]][size-url]
[![vulnerabilities][vulnerabilities]][vulnerabilities-url]
[![license][license]][license-url]


<br><a name="Installation"></a>

## Installation
```
npm install karma-webpack-bundle --save-dev
```

<br><a name="benchSettings"></a>

## benchSettings : <code>object</code>
> Settings object for karma-benchmark. I don't see any need for benchmarks to run for 5 seconds, so I've provided settings that run the benchmark for 200ms.

**Properties**

| Name | Type | Default |
| --- | --- | --- |
| maxTime | <code>number</code> | <code>0.2</code> | 
| minTime | <code>number</code> | <code>0.2</code> | 
| minSamples | <code>number</code> | <code>1</code> | 
| delay | <code>number</code> | <code>0</code> | 
| async | <code>boolean</code> | <code>true</code> | 

**Example**  
```javascript
const {benchSettings} = require('karma-webpack-bundle');

benchmark('how fast is this', () => {
    [1, 2, 3].map((x) => x * 2);
}, benchSettings);
```

<br><a name="formatBenchmark"></a>

## formatBenchmark ⇒ <code>string</code>
> A plugin for the karma-benchmarkjs-reporter formatBenchmark option. Only current difference with the default formatter is the hz number is passed through toLocaleString to make the number more readable. This is used in karmaBenchConfig.


| Param | Type | Description |
| --- | --- | --- |
| benchmark | <code>object</code> | benchmark |
| browser | <code>object</code> | browser |
| config | <code>object</code> | config |


<br><a name="karmaBenchConfig"></a>

## karmaBenchConfig ⇒ <code>function</code>
> Returns a config function that can be used with karma-benchmark. Sets up karma-benchmark to run in Chrome headless with karma-benchmarkjs-reporter (with the local formatBenchmark formatter), and webpack in production mode. Looks for files in a bench directory that match \*\*\/\*.bench.js.


| Param | Type | Description |
| --- | --- | --- |
| [settings] | <code>object</code> | Overrides any of the provided settings. |

**Example**  
create a file in the root of your project called karma.bench.conf.js:

```javascript
const {karmaBenchConfig} = require('karma-webpack-bundle');

module.exports = karmaBenchConfig();
```

and add a script to package.json:

```
    "bench": "karma start karma.bench.conf.js"
```

then run it:

```
npm run bench
```

<br><a name="karmaConfig"></a>

## karmaConfig ⇒ <code>function</code>
> Returns a config function that can be used with karma. Sets up karma to run in Chrome headless and Firefox headless with mocha and karma-mocha-reporter.
> 
> If --single-run is provided then webpack runs in production mode, otherwise it runs in dev mode.
> 
> If running on Travis CI then karma-coverage and karma-coveralls are added to reporters
> 
> By default it Looks for test files in a tests directory that match *.test.js. For source files it looks for index.js, and *.js files in a src directory or lib directory.


| Param | Type | Description |
| --- | --- | --- |
| [testRunnerConfig] | <code>Array</code> | A valid config for [test-runner-config](https://www.npmjs.com/package/test-runner-config) |
| [settings] | <code>object</code> | Overrides any of the provided settings. |

**Example**  
create a file in the root of your project called karma.conf.js:

```javascript
const { karmaConfig } = require('karma-webpack-bundle');

module.exports = karmaConfig();
```

and add a script or two to package.json:

```
    "test": "karma start --single-run",
    "test-watch": "karma start",
```

then run it:

```
npm test
```

<br><a name="wallabyConfig"></a>

## wallabyConfig ⇒ <code>function</code>
> Returns a config function that can be used with [wallaby](https://wallabyjs.com/). Sets the test framework to mocha, runs in Chrome headless, and sets up webpack similar to the karma config.
> 
> By default it Looks for test files in a tests directory that match *.test.js. For source files it looks for index.js, and *.js files in a src directory or lib directory.


| Param | Type | Description |
| --- | --- | --- |
| [testRunnerConfig] | <code>Array</code> | A valid config for [test-runner-config](https://www.npmjs.com/package/test-runner-config) |
| [settings] | <code>object</code> | Overrides any of the provided settings. |

**Example**  
create a file in the root of your project called wallaby.conf.js:

```javascript
const { wallabyConfig } = require('karma-webpack-bundle');

module.exports = wallabyConfig();
```

[npm]: https://img.shields.io/npm/v/karma-webpack-bundle.svg
[npm-url]: https://npmjs.com/package/karma-webpack-bundle
[deps]: https://david-dm.org/darrenpaulwright/karma-webpack-bundle.svg
[deps-url]: https://david-dm.org/darrenpaulwright/karma-webpack-bundle
[size]: https://packagephobia.now.sh/badge?p&#x3D;karma-webpack-bundle
[size-url]: https://packagephobia.now.sh/result?p&#x3D;karma-webpack-bundle
[vulnerabilities]: https://snyk.io/test/github/DarrenPaulWright/karma-webpack-bundle/badge.svg?targetFile&#x3D;package.json
[vulnerabilities-url]: https://snyk.io/test/github/DarrenPaulWright/karma-webpack-bundle?targetFile&#x3D;package.json
[license]: https://img.shields.io/github/license/DarrenPaulWright/karma-webpack-bundle.svg
[license-url]: https://npmjs.com/package/karma-webpack-bundle/LICENSE.md
