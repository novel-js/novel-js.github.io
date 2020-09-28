import { Option } from 'https://novel-js.github.io/pkgs/std/option/option.js'

class Some extends Option {
  constructor (inner) {
    super(inner)
    this.isSome = true
  }

  match (obj) {
    obj.some(this.inner)
  }

  unwrap () {
    return this.inner
  }
}
export { Some }
export default { Some }
