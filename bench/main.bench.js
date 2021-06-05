import benchSettings from '../src/benchSettings.js';

suite('Providing a way to test that karma-benchmark works', () => {
	benchmark('main', () => {
		[1, 2, 3].map((value) => value * 2);
	}, benchSettings);
});
