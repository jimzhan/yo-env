# var-env

Structure your npm scripts better via `NODE_ENV`


## WHAT?

Cross-platform supplement for your npm scripts.


## HOW?

```
// package.json

{
  "scripts": {
    "start": "var-env",
    "start:development": "nodemon --exec babel-node --inspect src/index.js",
    "start:production": "node --require esm src/index.js"
  }
}
```
