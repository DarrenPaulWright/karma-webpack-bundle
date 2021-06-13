module.exports = [{
	type: 'helper',
	files: [
		'tests/helper/**/*.js'
	]
}, {
	type: 'src',
	files: [
		'index.js',
		'src/**/*.js',
		'lib/**/*.js'
	]
}, {
	type: 'specs',
	files: [
		'tests/**/*.test.js'
	]
}];
