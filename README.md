# eslint-plugin-no-relative-imports

An eslint plugin to prevent relative paths in `import` statements. You will need to enable absolute imports,
for example by using a `root` or `alias` in the `resolve` section of your webpack config.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-no-relative-imports`:

```
$ npm install eslint-plugin-no-relative-imports --save-dev
```


## Usage

Add `no-relative-imports` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "no-relative-imports"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "no-relative-imports/no-relative-imports": "error"
    }
}
```

## Supported Rules

* `no-relative-imports`: prevent the use of relative paths in `import` statements.





