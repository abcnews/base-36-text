# base-36-text

Tools for encoding / decoding text to / from base36 strings.

## Usage

### As a CLI

Install globally with `npm i -g @abcnews/base-36-text` to use the `b36t` executable, or use npx:

```sh

npx @abcnews/base-36-text encode 'example text'
> 31ltulurfcfzwo4gm7o

npx @abcnews/base-36-text decode 31ltulurfcfzwo4gm7o
> example text
```

### As a library (node or browser)

```sh
npm i @abcnews/base-36-text
```

```js
import { encode, decode } from '@abcnews/base-36-text';

encode('example text');
// > 31ltulurfcfzwo4gm7o

decode('31ltulurfcfzwo4gm7o');
// > 'example text'
```

A browser usage example is included with this project. To try it:

```sh
git clone https://github.com/abcnews/base-36-text
cd base-36-text
npm run example
```

...then open the console in the browser window that opens, and try out `b36t.encode()` and `b36t.decode()`.
