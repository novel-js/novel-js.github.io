import {println} from "https://novel-js.github.io/pkgs/std/std/println.js";
import {print} from "https://novel-js.github.io/pkgs/std/std/print.js";
import {read} from "https://novel-js.github.io/pkgs/std/std/read.js";
import {write} from "https://novel-js.github.io/pkgs/std/std/write.js";
import {append} from "https://novel-js.github.io/pkgs/std/std/append.js";

const file = {
    read: read,
    write: write,
    append: append
}
export {println, print, file}
export default {println, print, file}
