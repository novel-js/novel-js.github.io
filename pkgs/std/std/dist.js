import { println } from 'https://novel-js.github.io/pkgs/std/std/println.js';
import { print } from 'https://novel-js.github.io/pkgs/std/std/print.js';
import { read } from 'https://novel-js.github.io/pkgs/std/std/read.js';
import { write } from 'https://novel-js.github.io/pkgs/std/std/write.js';
import { append } from 'https://novel-js.github.io/pkgs/std/std/append.js';
import { exists } from 'https://novel-js.github.io/pkgs/std/std/exists.js';
import { assert } from 'https://novel-js.github.io/pkgs/std/std/assert.js';
import { assertOrPanic } from 'https://novel-js.github.io/pkgs/std/std/assertOrPanic.js';
import { path } from 'https://novel-js.github.io/pkgs/std/std/path.js';

const file = {
  read: read,
  write: write,
  append: append,
  exists: exists,
  path: path
}
export { println, print, file, assert, assertOrPanic }
export default { println, print, file, assert, assertOrPanic }
