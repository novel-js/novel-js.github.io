class Option {
  constructor (inner) {
    this.inner = inner
    this.isSome = false
    this.isNone = false
  }

  isSome () {
    return this.isSome
  }

  isNone () {
    return this.isNone
  }

  match (patterns) {
    if (this.isSome) {
      patterns.some(this.unwrap())
    } else {
      patterns.none()
    }
  }
}
export { Option }
export default { Option }
