const tasks = arr => arr.join(' && ')

module.exports = {
  'hooks': {
    'prepare-commit-msg': tasks([
      'exec < /dev/tty && ./node_modules/commitizen/bin/git-cz --hook'
    ]),
    'commit-msg': tasks([
      'commitlint --edit $HUSKY_GIT_PARAMS'
    ])
  },
}