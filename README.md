This is a minimal setup which suppose to get `feathers.js` + `next.js`, how ever, it has some issues.

It generates a feathers app with feathers generator. Then add `next` support by using `npm i next react react-dom`.

## How to re-produce this error?

1. `npm run build`
2. `npm run startc`
3. Open `http://localhost:3050/index`
4. The page get renders. But there are errors in the console.

## What is the problem?

```bash
Refused to execute script from 'http://localhost:3030/_next/1517717442914/manifest.js' because its MIME type ('text/html') is not executable, and strict MIME type checking is enabled.
index:1 Refused to execute script from 'http://localhost:3030/_next/1517717442914/commons.js' because its MIME type ('text/html') is not executable, and strict MIME type checking is enabled.
index:1 Refused to execute script from 'http://localhost:3030/_next/1517717442914/main.js' because its MIME type ('text/html') is not executable, and strict MIME type checking is enabled.
index:1 Refused to execute script from 'http://localhost:3030/_next/1517717442914/page/index.js' because its MIME type ('text/html') is not executable, and strict MIME type checking is enabled.
index:1 Refused to execute script from 'http://localhost:3030/_next/1517717442914/page/_error.js' because its MIME type ('text/html') is not executable, and strict MIME type checking is enabled.
```
