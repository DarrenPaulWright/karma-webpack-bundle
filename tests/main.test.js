import { assert } from 'type-enforcer';
import defaultTestRunnerConfig from '../src/defaultTestRunnerConfig.js';

describe('Providing a way to test that karma works', () => {
	it('should work', () => {
		assert.is(defaultTestRunnerConfig.length, 3);
	});
});
