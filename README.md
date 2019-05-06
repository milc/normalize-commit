# Commit messages normalization

This repository holds basic config to commit consistently in your projects.


## How to install

Add this to your project's dependencies and run  
```
npm install
```

## How to use

Simply run `git commit` and follow indications.  

# How does it work

We use *husky* to handle Git hooks.  
On `prepare-commit-msg` hook, we prepare our commit message by following *commitizen* prompt indications.  
Then, your Git editor (probably `vi`) opens so you can validate your commit message.  
Finaly, `pre-commit` hook triggers *commitlint* to do a last check on our commit message.


## Dependencies

| Project | Package | Version | Links |
|---|---|---|---|
**Commitlint CLI** | [`@commitlint/cli`](https://npmjs.com/package/@commitlint/clii) | [![latest](https://img.shields.io/npm/v/@commitlint%2Fcli/latest.svg)](https://npmjs.com/package/@commitlint/clii) | [![README](https://img.shields.io/badge/README--green.svg)](/packages/@commitlint/cli/README.md)
**Commitizen** | [`commitizen`](https://npmjs.com/package/commitizen) | [![latest](https://img.shields.io/npm/v/commitizen/latest.svg)](https://npmjs.com/package/commitizen) |  
**Husky** | [`husky`](https://npmjs.com/package/husky) | [![latest](https://img.shields.io/npm/v/husky/latest.svg)](https://npmjs.com/package/husky) | 