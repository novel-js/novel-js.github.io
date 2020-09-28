import { Option } from 'https://novel-js.github.io/pkgs/std/option/option.js'
class None extends Option {
  constructor () {
    super(null)
    this.is_none = true
  }

  match (obj) {
    obj.none()
  }

  unwrap () {
    throw new Error('Could not unwrap() on a None() value')
  }
}
export {None}
export default {None}