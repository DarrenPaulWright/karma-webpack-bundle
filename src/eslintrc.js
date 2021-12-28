const { OFF, WARN, ERROR } = require('./eslintErrorTypes.js');

/**
 * An eslint config object intended to live in the root of your project.
 *
 * @example
 * Create a file in the root of your project called .eslintrc.cjs:
 *
 * ```javascript
 * const { eslintrc } = require('karma-webpack-bundle');
 *
 * module.exports = eslintrc;
 * ```
 *
 * @name eslintrc
 * @type {object}
 */
module.exports = {
	parser: 'babel-eslint',
	plugins: [
		'babel',
		'jsdoc',
		'import',
		'unicorn',
		'mocha'
	],
	env: {
		'browser': true,
		'node': true,
		'es6': true,
		'mocha': true
	},
	parserOptions: {
		'ecmaVersion': 6,
		'sourceType': 'module'
	},
	extends: [
		'eslint:recommended'
	],
	globals: {
		'suite': 'readonly',
		'benchmark': 'readonly'
	},
	reportUnusedDisableDirectives: true,
	settings: {
		'jsdoc': {
			'tagNamePreference': {
				'arg': 'param',
				'return': 'returns',
				'augments': 'extends',
				'chainable': 'chainable',
				'category': 'category',
				'method': 'method',
				'memberof': 'memberOf'
			},
			'preferredTypes': {
				'Int': 'number.int',
				'int': 'number.int',
				'integer': 'number.int',
				'Integer': 'number.int',
				'Float': 'number.float',
				'float': 'number.float'
			}
		}
	},
	rules: {
		'curly': ERROR,
		'default-param-last': ERROR,
		'dot-notation': ERROR,
		'eqeqeq': ERROR,
		'no-else-return': ERROR,
		'no-lone-blocks': ERROR,
		'no-labels': ERROR,
		'no-eval': ERROR,
		'no-implied-eval': ERROR,
		'no-implicit-globals': ERROR,
		'no-multi-spaces': ERROR,
		'no-loop-func': ERROR,
		'no-new': ERROR,
		'no-new-func': ERROR,
		'no-new-wrappers': ERROR,
		'no-octal-escape': ERROR,
		'no-script-url': ERROR,
		'no-self-compare': ERROR,
		'no-sequences': ERROR,
		'no-throw-literal': ERROR,
		'no-unused-expressions': ERROR,
		'no-useless-call': ERROR,
		'no-useless-concat': ERROR,
		'no-useless-return': ERROR,
		'no-void': ERROR,
		'radix': ERROR,
		'require-unicode-regexp': ERROR,
		'wrap-iife': ERROR,
		'no-shadow': ERROR,
		'camelcase': ERROR,
		'comma-spacing': ERROR,
		'block-spacing': ERROR,
		'eol-last': ERROR,
		'func-call-spacing': ERROR,
		'computed-property-spacing': ERROR,
		'key-spacing': ERROR,
		'linebreak-style': ERROR,
		'lines-between-class-members': [ERROR,
			'always',
			{ 'exceptAfterSingleLine': true }],
		'max-depth': ERROR,
		'new-cap': [ERROR, { 'capIsNewExceptionPattern': '$.*' }],
		'new-parens': ERROR,
		'no-lonely-if': ERROR,
		'no-mixed-operators': ERROR,
		'no-mixed-spaces-and-tabs': ERROR,
		'no-multiple-empty-lines': ERROR,
		'no-negated-condition': ERROR,
		'no-new-object': ERROR,
		'no-trailing-spaces': ERROR,
		'no-unneeded-ternary': ERROR,
		'no-whitespace-before-property': ERROR,
		'semi-spacing': ERROR,
		'space-before-blocks': ERROR,
		'space-unary-ops': ERROR,
		'arrow-spacing': ERROR,
		'generator-star-spacing': ERROR,
		'no-duplicate-imports': ERROR,
		'no-useless-computed-key': ERROR,
		'no-useless-constructor': ERROR,
		'no-var': ERROR,
		'func-name-matching': ERROR,
		'prefer-const': ERROR,
		'prefer-spread': ERROR,
		'prefer-rest-params': ERROR,
		'rest-spread-spacing': ERROR,
		'object-shorthand': ERROR,
		'consistent-this': [ERROR, 'self'],
		'space-before-function-paren': [ERROR, 'never'],
		'space-in-parens': [ERROR, 'never'],
		'semi-style': [ERROR, 'last'],
		'arrow-parens': [ERROR, 'always'],
		'semi': [ERROR, 'always', { 'omitLastInOneLineBlock': false }],
		'object-curly-spacing': [ERROR, 'always'],
		'one-var': [ERROR, 'never'],
		'padded-blocks': [ERROR, 'never'],
		'quotes': [ERROR, 'single'],
		'indent': [ERROR, 'tab', {
			SwitchCase: 1,
			MemberExpression: 'off',
			ignoredNodes: [
				'CallExpression > MemberExpression *'
			]
		}],
		'function-paren-newline': OFF,
		'object-curly-newline': [ERROR, {
			'multiline': true,
			'consistent': true
		}],
		'comma-style': [ERROR, 'last'],
		'brace-style': [ERROR, 'stroustrup'],
		'comma-dangle': [ERROR, 'never'],
		'grouped-accessor-pairs': [ERROR, 'getBeforeSet'],
		'yoda': [ERROR, 'never', { 'onlyEquality': true }],
		'max-params': [ERROR, { 'max': 5 }],
		'no-console': OFF,
		'no-useless-escape': OFF,
		'no-fallthrough': OFF,
		'no-multi-assign': OFF,
		'func-names': OFF,
		'prefer-destructuring': OFF,
		'prefer-template': OFF,
		'no-undefined': OFF,
		'arrow-body-style': OFF,
		'complexity': WARN,
		'accessor-pairs': WARN,
		'no-warning-comments': WARN,
		'capitalized-comments': WARN,
		'init-declarations': WARN,

		'jsdoc/check-alignment': ERROR,
		'jsdoc/check-examples': OFF,
		'jsdoc/check-indentation': [ERROR, {
			excludeTags: ['example', 'description', 'summary']
		}],
		'jsdoc/check-param-names': ERROR,
		'jsdoc/check-syntax': ERROR,
		'jsdoc/check-tag-names': ERROR,
		'jsdoc/check-types': ERROR,
		'jsdoc/implements-on-classes': ERROR,
		'jsdoc/match-description': [ERROR, {
			matchDescription: '^([A-Z].+ (.|\\n)+[.?!])?$',
			tags: {
				param: true,
				property: true,
				returns: true
			}
		}],
		'jsdoc/newline-after-description': ERROR,
		'jsdoc/no-types': OFF,
		'jsdoc/no-undefined-types': ERROR,
		'jsdoc/require-description': ERROR,
		'jsdoc/require-description-complete-sentence': OFF,
		'jsdoc/require-example': OFF,
		'jsdoc/require-hyphen-before-param-description': [ERROR,
			'always',
			{ 'tags': { 'property': 'always' } }],
		'jsdoc/require-jsdoc': [ERROR, {
			contexts: [
				'ClassDeclaration',
				'ClassExpression',
				'MethodDefinition'
			],
			publicOnly: true,
			checkConstructors: false,
			checkGetters: true,
			checkSetters: 'no-getter'
		}],
		'jsdoc/require-param': ERROR,
		'jsdoc/require-param-description': OFF,
		'jsdoc/require-param-name': ERROR,
		'jsdoc/require-param-type': ERROR,
		'jsdoc/require-returns': ERROR,
		'jsdoc/require-returns-check': ERROR,
		'jsdoc/require-returns-description': OFF,
		'jsdoc/require-returns-type': ERROR,
		'jsdoc/valid-types': ERROR,

		'import/extensions': [ERROR, 'ignorePackages'],
		'import/no-unresolved': ERROR,
		'import/named': ERROR,
		'import/namespace': ERROR,
		'import/default': ERROR,
		'import/export': ERROR,
		'import/no-named-as-default': WARN,
		'import/no-named-as-default-member': WARN,
		'import/no-absolute-path': ERROR,
		'import/no-dynamic-require': ERROR,
		'import/no-webpack-loader-syntax': ERROR,
		'import/no-self-import': ERROR,
		'import/no-deprecated': ERROR,
		'import/no-extraneous-dependencies': ERROR,
		'import/no-mutable-exports': ERROR,
		'import/first': ERROR,
		'import/no-duplicates': ERROR,
		'import/no-namespace': ERROR,
		'import/order': [ERROR, {
			'groups': [
				'builtin',
				'external',
				'index',
				'internal',
				'parent',
				'sibling',
				'unknown'
			]
		}],
		'import/newline-after-import': ERROR,
		'import/no-named-default': ERROR,

		'unicorn/better-regex': ERROR,
		'unicorn/catch-error-name': ERROR,
		'unicorn/consistent-function-scoping': OFF,
		'unicorn/custom-error-definition': OFF,
		'unicorn/error-message': ERROR,
		'unicorn/escape-case': ERROR,
		'unicorn/expiring-todo-comments': OFF,
		'unicorn/explicit-length-check': [ERROR, {
			'non-zero': 'not-equal'
		}],
		'unicorn/filename-case': [ERROR, {
			'cases': {
				'camelCase': true,
				'pascalCase': true
			}
		}],
		'unicorn/import-index': OFF,
		'unicorn/new-for-builtins': OFF,
		'unicorn/no-abusive-eslint-disable': ERROR,
		'unicorn/no-array-instanceof': ERROR,
		'unicorn/no-console-spaces': OFF,
		'unicorn/no-fn-reference-in-iterator': OFF,
		'unicorn/no-for-loop': OFF,
		'unicorn/no-hex-escape': ERROR,
		'unicorn/no-keyword-prefix': OFF,
		'no-nested-ternary': OFF,
		'unicorn/no-nested-ternary': ERROR,
		'unicorn/no-new-buffer': ERROR,
		'unicorn/no-process-exit': ERROR,
		'unicorn/no-unreadable-array-destructuring': OFF,
		'unicorn/no-unsafe-regex': ERROR,
		'unicorn/no-unused-properties': OFF,
		'unicorn/no-zero-fractions': ERROR,
		'unicorn/number-literal-case': ERROR,
		'unicorn/prefer-add-event-listener': OFF,
		'unicorn/prefer-dataset': OFF,
		'unicorn/prefer-event-key': OFF,
		'unicorn/prefer-flat-map': OFF,
		'unicorn/prefer-includes': ERROR,
		'unicorn/prefer-modern-dom-apis': ERROR,
		'unicorn/prefer-negative-index': ERROR,
		'unicorn/prefer-node-append': ERROR,
		'unicorn/prefer-node-remove': ERROR,
		'unicorn/prefer-query-selector': ERROR,
		'unicorn/prefer-reflect-apply': ERROR,
		'unicorn/prefer-replace-all': OFF,
		'unicorn/prefer-spread': OFF,
		'unicorn/prefer-starts-ends-with': ERROR,
		'unicorn/prefer-string-slice': ERROR,
		'unicorn/prefer-text-content': ERROR,
		'unicorn/prefer-trim-start-end': ERROR,
		'unicorn/prefer-type-error': ERROR,
		'unicorn/prevent-abbreviations': [ERROR, {
			'replacements': {
				'arg': false,
				'args': false,
				'conf': false,
				'dev': false,
				'prod': false,
				'doc': false,
				'docs': false,
				'param': false,
				'params': false
			}
		}],
		'unicorn/string-content': OFF,
		'unicorn/throw-new-error': ERROR,

		'mocha/handle-done-callback': ERROR,
		'mocha/max-top-level-suites': [ERROR, { 'limit': 1 }],
		'mocha/no-async-describe': ERROR,
		'mocha/no-exclusive-tests': WARN,
		'mocha/no-global-tests': ERROR,
		'mocha/no-hooks': OFF,
		'mocha/no-hooks-for-single-case': ERROR,
		'mocha/no-identical-title': ERROR,
		'mocha/no-mocha-arrows': OFF,
		'mocha/no-nested-tests': OFF,
		'mocha/no-pending-tests': WARN,
		'mocha/no-return-and-callback': OFF,
		'mocha/no-return-from-async': ERROR,
		'mocha/no-setup-in-describe': OFF,
		'mocha/no-sibling-hooks': ERROR,
		'mocha/no-skipped-tests': ERROR,
		'mocha/no-synchronous-tests': OFF,
		'mocha/no-top-level-hooks': OFF,
		'mocha/prefer-arrow-callback': OFF,
		'mocha/valid-suite-description': OFF,
		'mocha/valid-test-description': ERROR
	}
};
