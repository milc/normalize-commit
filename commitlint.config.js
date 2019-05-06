module.exports = {
	rules: {
		'body-leading-blank': [2, 'always'],
    'body-max-line-length': [1, 'always', 80],
		'footer-leading-blank': [1, 'always'],
		'header-max-length': [2, 'always', 72],
		'scope-case': [2, 'always', 'lower-case'],
		'scope-empty': [2, 'never'],
		'subject-case': [
			2,
			'always',
			['sentence-case', 'start-case', 'pascal-case', 'upper-case']
		],
		'subject-empty': [2, 'never'],
		'subject-full-stop': [2, 'never', '.'],
    'subject-min-length': [2, 'always', 4],
		'type-case': [2, 'always', 'lower-case'],
		'type-empty': [2, 'never'],
		'type-enum': [
			2,
			'always',
			[
				// 'build',
				'chore',
				// 'ci',
				'docs',
				'feat',
				'fix',
				'perf',
				'refactor',
				'revert',
				'style',
				'test'
			]
		]
	}
};