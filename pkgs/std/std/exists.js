import {read} from   "https://novel-js.github.io/pkgs/std/std/read.js";

function exists(filename) {
    return new Promise((resolve, reject) => {
        read(filename).then(() => {
            resolve(true)
        }).catch(() => {
            resolve(false)
        })
    })
}
export { exists }
export default exists
